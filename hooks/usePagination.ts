import { useCallback, useEffect, useMemo, useState } from "react";
import { Pagination } from "interfaces/pagination";
import { useRouter } from "next/router";

type Props<T> = {
  data: T[];
  perPage: number;
  page: number;
  loading: boolean;
};

const usePagination = <T extends object>({
  data: allData,
  page,
  perPage,
}: Props<T>): Pagination<T> => {

  const router = useRouter()
  const [data, setData] = useState<T[]>();  
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePagination = (nextPage: number) => {
    router.push(router.basePath, {
      query: {...router.query, page: nextPage}
    }, { shallow: true})
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
    
  }, [currentPage, allData]);

  useEffect(() => {
    if (page) setCurrentPage(page);
  },[page])

  return {
    data,
    handlePagination,
    currentPage,
    totalItems: allData?.length || 0
  } as Pagination<T>;
};

export default usePagination;
