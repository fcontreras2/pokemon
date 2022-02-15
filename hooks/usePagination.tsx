import { useCallback, useEffect, useMemo, useState } from "react";

type Props<T> = {
  data: T[];
  perPage: number;
  page: number;
  loading: boolean;
};

type Response<T> = {
  data: T;
};

const INITIAL_PROPS: Props<any> = {
  data: [],
  page: 0,
  perPage: 60,
  loading: true,
};

const usePagination = <T extends object>({
  data: allData,
  page,
  perPage,
  loading,
}: Props<T> = INITIAL_PROPS) => {
  const [data, setData] = useState<T[]>();
  const [pages, setPages] = useState<(number | string)[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(page);

  const totalPages = useMemo(() => {
    return allData ? Math.ceil((allData as T[]).length / perPage) : 0;
  }, [allData]);

  const handlePagination = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    const nextPages: (number | string)[] = [];
    for (let index = 0; index < totalPages; index++) {
      nextPages[index] = index + 1;
    }

    setPages(nextPages);
  }, [totalPages]);

  const changePagination = useCallback(() => {
    setData(allData.slice(currentPage * perPage, (currentPage + 1) * perPage));
  }, [allData, currentPage, perPage]);

  useEffect(() => {
    changePagination();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
  }, [currentPage]);

  useEffect(() => {
    if (!loading) {
      changePagination();
    }
  }, [loading]);

  return {
    data,
    pages,
    handlePagination,
    currentPage,
  };
};

export default usePagination;
