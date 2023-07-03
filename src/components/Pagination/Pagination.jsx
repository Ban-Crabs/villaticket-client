import React from 'react';
import { usePagination, DOTS } from './usePagination';
import style from './Pagination.module.scss';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = async () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = async () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={style["pagination-container"]}
    >
      <li
        className={style["pagination-item"]}
        key="previous"
        disabled={currentPage === 1}
      >
        <div className={style["arrow", "left"]} onClick={() => onPrevious}/>
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className={style["pagination-item", "dots"]} key={pageNumber}>&#8230;</li>;
        }

        return (
          <li
            className={style["pagination-item"]}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={style["pagination-item"]} disabled={currentPage === lastPage}>
        <div className={style["arrow", "right"]} onClick={() => onNext}/>
      </li>
    </ul>
  );
};

export default Pagination;
