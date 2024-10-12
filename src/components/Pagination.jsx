import React, { useContext } from 'react';
import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';
import { NewsContext } from '../NewsContext';
const Pagination = () => {
  const { page, setPage, totalPages } = useContext(NewsContext);
  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };
  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={page === 1}>
        <GrPrevious />
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={page === totalPages}>
        <GrNext />
      </button>
    </div>
  );
};

export default Pagination;
