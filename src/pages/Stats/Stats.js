import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllLaunches } from '../../features/launchesSlice';
import { Wrapper } from './Stats.styled';
import { BgImage } from '../../components/BgImage/BgImage.styled';
import imgSrc from '../../assets/rocket_fog.jpg';
import Error from '../../components/Error/Error';
import StatsTable from '../../components/StatsTable.js/StatsTable';
import Navigation from '../../components/Navigation/Navigation';
import GaugesStats from '../../components/GaugesStats/GaugesStats';
import ArrowDown from '../../components/ArrowDown/ArrowDown';

const Stats = ({ windowSize, isMobile }) => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((state) => state.allLaunches.status);
  const { data } = useSelector((state) => state.allLaunches);

  useEffect(() => {
    if (fetchStatus === 'idle') {
      dispatch(fetchAllLaunches());
    }
  }, [dispatch, fetchStatus]);

  if (fetchStatus === 'error') {
    return (
      <div>
        <Error />
      </div>
    );
  }

  if (!data) {
    return <div></div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <BgImage imgSrc={imgSrc} />
      <Navigation height={windowSize.height} isMobile={isMobile} />
      <Wrapper>
        <GaugesStats data={data.docs} />
        {isMobile && <ArrowDown height={windowSize.height} />}
        <StatsTable data={data} isMobile={isMobile} />
      </Wrapper>
    </motion.div>
  );
};

export default Stats;
