import { useCallback, useEffect, useMemo, useState } from "react";
import { Pagination } from "interfaces/pagination";

type Props<T> = {
  data: T[];
  perPage: number;
  page: number;
  loading: boolean;
};

const INITIAL_PROPS = {
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
}: Props<T> = INITIAL_PROPS): Pagination<T> => {

  const [data, setData] = useState<T[]>();
  const [currentPage, setCurrentPage] = useState<number>(page);

  const handlePagination = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

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
    handlePagination,
    currentPage,
    totalItems: allData?.length || 0
  } as Pagination<T>;
};

export default usePagination;
