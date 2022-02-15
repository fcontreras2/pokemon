export interface Pagination<T> {
    data: T[],
    currentPage: number,
    totalItems: number;
    handlePagination: (nextPage: number) => void,
} 