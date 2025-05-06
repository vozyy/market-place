import { useMemo } from "react";

export default function usePagination({data = [], itemsPerPage = 3, currentPage = 1}) {
    
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const safePage = Math.min(Math.max(currentPage, 1), totalPages);

    const paginatedData = useMemo(() => {
        const start = (safePage - 1) * itemsPerPage;
        return data.slice(start, start + itemsPerPage);
    }, [data, safePage, itemsPerPage]);

    return {paginatedData, totalPages, currentPage: safePage};
}