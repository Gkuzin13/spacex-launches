import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { BgImage } from '../components/BgImage/BgImage';
import { GaugeWrapper } from './History.styled';
import imgSrc from '../assets/rockets_sunset.jpg';
import Gauge from '../components/Gauge/Gauge';
import getStats from '../utils/getStats';
import StatsTable from '../components/StatsTable.js/StatsTable';
import Navigation from '../components/Navigation/Navigation';
import { getAllLaunches } from '../utils/apiClient';

const History = () => {
  const [stats, setStats] = useState(null);
  const { status, data, error } = useQuery(['all'], getAllLaunches);

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
      transition={{ duration: 0.1 }}>
      <Navigation />
      <BgImage img={imgSrc} />
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
      <StatsTable data={data} />
    </motion.div>
  );
};

export default History;
