import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { BgImage } from '../../components/BgImage/BgImage';
import { GaugeWrapper, Wrapper } from './History.styled';
import imgSrc from '../../assets/rocket_fog.jpg';
import Gauge from '../../components/Gauge/Gauge';
import getStats from '../../utils/getStats';
import StatsTable from '../../components/StatsTable.js/StatsTable';
import Navigation from '../../components/Navigation/Navigation';
import { getAllLaunches } from '../../utils/apiClient';
import ScrollArrow from '../../components/ScrollArrow/ScrollArrow';
import useWindowSize from '../../hooks/useWindowSize';
import useScrollPosition from '../../hooks/useScrollPosition';

const History = () => {
  const [stats, setStats] = useState(null);
  const { status, data, error } = useQuery(['all'], getAllLaunches);

  const { width, height } = useWindowSize();
  const { scrollY } = useScrollPosition();

  console.log(data);

  useEffect(() => {
    if (data) setStats(getStats(data.docs));
  }, [data]);

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  if (!data || !stats) {
    return <></>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <Wrapper>
        <BgImage img={imgSrc} />
        <Navigation />
        <GaugeWrapper>
          <Gauge
            stats={stats.missions}
            text={'SUCCESSFUL'}
            midText={'MISSIONS'}
          />
          <Gauge
            stats={stats.boosterLandings}
            text={'SUCCESSFUL'}
            midText={'BOOSTER LANDINGS'}
          />
          <Gauge
            stats={stats.reusedBoosters}
            text={'BOOSTERS'}
            midText={'REUSABILITY RATE'}
            percentage={true}
          />
          <Gauge
            stats={stats.reusedFairings}
            text={'FAIRINGS'}
            midText={'REUSABILITY RATE'}
            percentage={true}
          />
        </GaugeWrapper>
        {width < 768 && <ScrollArrow height={height} scrollY={scrollY} />}
        <StatsTable data={data} />
      </Wrapper>
    </motion.div>
  );
};

export default History;
