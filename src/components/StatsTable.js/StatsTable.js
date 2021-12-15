import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Table, TableWrapper, TableBorder } from './StatsTable.styled';
import Pagination from '../Pagination/Pagination';
import TableHead from './TableHead';
import Row from './Row';

const StatsTable = ({ data, isMobile }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const launchesPerPage = 10;
  const indexLastLaunch = currentPage * launchesPerPage;
  const indexFirstLaunch = indexLastLaunch - launchesPerPage;
  const currentLaunches = isMobile
    ? data.docs
    : data.docs.slice(indexFirstLaunch, indexLastLaunch);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  const boosterHasLanded = (attempt, status) => {
    if (attempt === null && status === null) return 'NO DATA';
    if (!attempt) return 'NO ATTEMPT';
    return status ? 'SUCCESS' : 'FAILURE';
  };

  return (
    <TableWrapper>
      <Table>
        <TableHead />
        <AnimatePresence initial={false} exitBeforeEnter>
          <tbody>
            {currentLaunches.map((stat) => {
              const boostStatus = boosterHasLanded(
                stat.cores[0].landing_attempt,
                stat.cores[0].landing_success
              );
              const missionStatus = stat.success ? 'SUCCESS' : 'FAILURE';
              return (
                <motion.tr
                  key={stat.id}
                  initial={{ opacity: 0, transform: 'translateY(-5%)' }}
                  animate={{ opacity: 1, transform: 'translateY(0%)' }}
                  exit={{ opacity: 0, transform: 'translateY(5%)' }}
                  transition={{ duration: 0.5 }}>
                  <Row
                    stat={stat}
                    missionStatus={missionStatus}
                    boostStatus={boostStatus}
                  />
                </motion.tr>
              );
            })}
          </tbody>
        </AnimatePresence>
      </Table>
      <TableBorder />
      {!isMobile && (
        <Pagination
          launchesPerPage={launchesPerPage}
          currentPage={currentPage}
          totalLaunches={data.docs.length}
          paginate={paginate}
        />
      )}
    </TableWrapper>
  );
};

export default StatsTable;
