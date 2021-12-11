import { PageButton, PaginationWrapper } from './Pagination.style';

const Pagination = ({
  launchesPerPage,
  currentPage,
  totalLaunches,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLaunches / launchesPerPage); i++) {
    pageNumbers.push(i);
  }

  const runPaginate = (e, number) => {
    e.preventDefault();
    paginate(number);
  };

  console.log(currentPage);

  return (
    <PaginationWrapper>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <PageButton key={number}>
              <a
                thisPage={currentPage === number ? true : false}
                onClick={(e) => runPaginate(e, number)}
                href='!#'>
                {number}
              </a>
            </PageButton>
          );
        })}
      </ul>
    </PaginationWrapper>
  );
};

export default Pagination;
