import React from "react";

const BlogPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handleMovePage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="d-flex justify-content-center mb-5 mt-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handleMovePage(page)}
          className={`btn ${
            page === currentPage
              ? "btn-pagination-active"
              : "btn-pagination-passive"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default BlogPagination;
