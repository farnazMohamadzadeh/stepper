import React, { useEffect, useState } from "react";

const Pagination = ({ items, itemCountPerPage, setProductItems }) => {
  const [pageCount, setPageCount] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let endIndex = itemCountPerPage * page;
    let startIndex = endIndex - itemCountPerPage;
    let PaginationItems = items.slice(startIndex, endIndex);
    setProductItems(PaginationItems);
    let pageNumber = Math.ceil(items.length / itemCountPerPage);
    setPageCount(pageNumber);
  }, [items, page]);
  const arr = Array(pageCount).fill(0);
  return (
    <nav aria-label="Page navigation" className="flex justify-center">
      <ul className="inline-flex space-x-2">
        <li onClick={() => setPage(page - 1)}>
          <button
            className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full ${
              pageCount === page && "bg-white"
            } focus:shadow-outline hover:bg-indigo-100`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {arr.map((item, index) => (
          <li onClick={() => setPage(index + 1)} key={index + 1}>
            <button
              className={`w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full ${
                page === index + 1 && "bg-indigo-100"
              } focus:shadow-outline hover:bg-indigo-100`}
            >
              {index + 1}
            </button>
          </li>
        ))}

        <li onClick={() => setPage(page + 1)}>
          <button
            className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 ${
              page < pageCount && "bg-white"
            } rounded-full focus:shadow-outline hover:bg-indigo-100`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
