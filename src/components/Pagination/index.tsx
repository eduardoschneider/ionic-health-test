import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import './styles.scss';

interface PaginationProps {
  loading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ loading, currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1 || loading}>
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1 || loading}>
        <MdKeyboardArrowLeft/>
      </button>
      <span className="page-count">
        {currentPage} de {totalPages}
      </span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages || loading}>
        <MdKeyboardArrowRight/>
      </button>
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages || loading}>
        <MdKeyboardDoubleArrowRight/>
      </button>
    </div>
  );
};

export default React.memo(Pagination);