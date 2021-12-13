import { PageButton, PageNumber, PaginationWrapper } from './Pagination.style';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Pagination = ({
  launchesPerPage,
  currentPage,
  totalLaunches,
  paginate,
}) => {
  const [range, setRange] = useState({ start: 1, end: 5 });

  const numberOfPages = Math.ceil(totalLaunches / launchesPerPage);
  let pageNumbers = [];

  for (let i = range.start; i <= numberOfPages; i++) {
    if (i <= range.end && i <= numberOfPages) pageNumbers.push(i);
  }

  if (currentPage >= range.end) {
    setRange({ start: range.start + 2, end: range.end + 2 });
  }

  if (currentPage <= range.start + 1 && range.start > 2) {
    setRange({ start: range.start - 2, end: range.end - 2 });
  }

  const goToPage = (e, number) => {
    e.preventDefault();
    if (number < 1 || number > numberOfPages) return;
    paginate(number);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    const prevPageNum = currentPage - 1;
    paginate(prevPageNum);
  };

  const nextPage = () => {
    if (currentPage === numberOfPages) return;
    const nextPageNum = currentPage + 1;
    paginate(nextPageNum);
  };

  return (
    <PaginationWrapper>
      <PageButton onClick={() => prevPage()} disabled={currentPage <= 1}>
        <LeftOutlined />
      </PageButton>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <PageNumber key={number} thisPage={currentPage === number}>
              <a onClick={(e) => goToPage(e, number)} href='!#'>
                {number}
              </a>
            </PageNumber>
          );
        })}
        {currentPage < numberOfPages - 1 && <PageNumber>...</PageNumber>}
        {currentPage < numberOfPages - 1 && (
          <PageNumber thisPage={currentPage === numberOfPages}>
            <a onClick={(e) => goToPage(e, numberOfPages)} href='!#'>
              {numberOfPages}
            </a>
          </PageNumber>
        )}
      </ul>
      <PageButton
        onClick={() => nextPage()}
        disabled={currentPage === numberOfPages}>
        <RightOutlined />
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
