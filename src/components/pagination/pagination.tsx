'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  currentPage: string;
  totalPages: number;
  basePath: string;
  maxVisiblePages?: number;
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  maxVisiblePages = 3,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));

    router.push(`${basePath}?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pages = [];

    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(Number(currentPage) - half, 1);
    let end = start + maxVisiblePages - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div>
      <button
        onClick={() => goToPage(Number(currentPage) - 1)}
        disabled={Number(currentPage) <= 1}
      >
        Prev
      </button>

      {pages[0] > 1 && (
        <>
          <button onClick={() => goToPage(1)}>1</button>
          {pages[0] > 2 && <span>...</span>}
        </>
      )}

      {pages.map((page) => (
        <button key={page} onClick={() => goToPage(page)}>
          {page}
        </button>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && <span>...</span>}
          <button onClick={() => goToPage(totalPages)}>{totalPages}</button>
        </>
      )}

      <button
        onClick={() => goToPage(Number(currentPage) + 1)}
        disabled={Number(currentPage) >= totalPages}
      >
        Next
      </button>
    </div>
  );
}
