import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BgImage } from '../components/BgImage/BgImage';
import { GaugeWrapper } from './History.styled';
import imgSrc from '../assets/rockets_sunset.jpg';
import client from '../utils/fetch';
import Gauge from '../components/Gauge/Gauge';
import getStats from '../utils/getStats';
import StatsTable from '../components/StatsTable.js/StatsTable';
import Navigation from '../components/Navigation/Navigation';

const History = () => {
  const [data, setData] = useState(null);

  const stats = data && getStats(data);

  useEffect(() => {
    client('launches/query', {
      method: 'POST',
      body: JSON.stringify({
        query: {
          upcoming: false,
        },
        options: {
          limit: 300,
          populate: [
            {
              path: 'launchpad',
              select: {
                locality: 1,
              },
            },
            {
              path: 'rocket',
              select: {
                name: 1,
              },
            },
            {
              path: 'payloads',
              select: {
                orbit: 1,
                type: 1,
              },
            },
            {
              path: 'cores.core',
              select: {
                serial: 1,
              },
            },
          ],
          sort: {
            date_unix: 'desc',
          },
        },
      }),
    }).then(
      (data) => {
        console.log(data.docs);
        setData(data.docs);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  if (!data) {
    return <></>;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
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
