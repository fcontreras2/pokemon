import { Pagination as PaginationI } from "interfaces/pagination";
import { useEffect, useMemo, useState } from "react";

interface Props extends Omit<PaginationI<null>, "data"> {
  perPage: number;
}

const Pagination = ({
  perPage,
  totalItems,
  handlePagination,
  currentPage,
}: Props) => {
  const [pages, setPages] = useState<(number | string)[]>([]);

  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / perPage) || 0;
  }, [totalItems]);

  useEffect(() => {
    let nextPages: (number | string)[] = [];

    const diffBegin = currentPage - 3 < 0 ? currentPage - 3 : 0;
    const diffEnd =
      currentPage + 3 > totalPages ? currentPage + 3 - totalPages + 1 : 0;
    const begin = currentPage - 3 - (diffEnd !== 0 ? Math.abs(diffEnd) : 0);
    const end = currentPage + 3 + (diffBegin !== 0 ? Math.abs(diffBegin) : 0);

    for (let i = begin; i <= end; i++) {
      if (i >= 0 && i < totalPages) {
        nextPages.push(i);
      }
    }

    setPages(nextPages);
  }, [currentPage, totalPages]);

  return (
    <div className="flex justify-center my-8 mx-4  py-4 bg-blue-dark bg-opacity-50 rounded-lg">
      <div className="flex justify-center flex-wrap px-2 space-x-2 tablet:space-y-0  tablet:space-x-3 desktop:space-x-4 items-center">
        <button
          disabled={currentPage === 0}
          onClick={() => {
            handlePagination(0);
          }}
          className="font-audio bg-blue-dark-300 hover:bg-blue-dark-500 hover:border-dark-200  border-2 border-blue-dark-300  text-white w-8 h-8 tablet:w-10 tablet:h-10 p-2 flex justify-center items-center rounded-md  disabled:hover:cursor-not-allowed disabled:bg-blue-dark-50 disabled:text-blue-dark-200"
        >{`<<`}</button>
        <button
          disabled={currentPage === 0}
          onClick={() => {
            handlePagination(currentPage - 1);
          }}
          className="font-audio bg-blue-dark-300 hover:bg-blue-dark-500 hover:border-dark-200  border-2 border-blue-dark-300  text-white w-8 h-8 tablet:w-10 tablet:h-10 p-2 flex justify-center items-center rounded-md  disabled:hover:cursor-not-allowed disabled:bg-blue-dark-50 disabled:text-blue-dark-200"
        >{`<`}</button>

        {pages.map((e) => (
          <button
            key={"button-pag-" + e}
            onClick={() => {
              handlePagination(e as number);
            }}
            className={`font-audio hover:bg-blue-dark-500 ${
              currentPage === (e as number)
                ? "bg-blue-dark-500"
                : "bg-blue-dark-300"
            } hover:border-dark-200  border-2 border-blue-dark-300  text-white w-8 h-8 tablet:w-10 tablet:h-10 p-2 flex justify-center items-center rounded-md `}
          >
            {(e as number) + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages - 1}
          onClick={() => {
            handlePagination(currentPage + 1);
          }}
          className="font-audio bg-blue-dark-300 hover:bg-blue-dark-500 hover:border-dark-200  border-2 border-blue-dark-300  text-white w-8 h-8 tablet:w-10 tablet:h-10  p-2 flex justify-center items-center rounded-md  disabled:hover:cursor-not-allowed disabled:bg-blue-dark-50 disabled:text-blue-dark-200"
        >{`>`}</button>
        <button
          disabled={currentPage === totalPages - 1}
          onClick={() => {
            handlePagination(totalPages - 1);
          }}
          className="font-audio bg-blue-dark-300 hover:bg-blue-dark-500 hover:border-dark-200  border-2 border-blue-dark-300  text-white w-8 h-8 tablet:w-10 tablet:h-10 p-2 flex justify-center items-center rounded-md  disabled:hover:cursor-not-allowed disabled:bg-blue-dark-50 disabled:text-blue-dark-200"
        >{`>>`}</button>
      </div>
    </div>
  );
};

export default Pagination;
