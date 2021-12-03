import { useEffect, useState } from 'react';
import { BgImage } from '../components/BgImage/BgImage';
import { Container } from './History.styled';
import imgSrc from '../assets/rockets_sunset.jpg';
import client from '../utils/fetch';
import Gauge from '../components/Gauge/Gauge';
import getStats from '../utils/getStats';
import StatsTable from '../components/StatsTable.js/StatsTable';

const History = () => {
  const [data, setData] = useState([]);

  const stats = getStats(data);

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

  if (!data && !stats) {
    return <></>;
  }
  return (
    <div>
      <BgImage img={imgSrc} />
      <Container>
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
          midText={'REUSABILLITY RATE'}
          percentage={true}
        />
        <Gauge
          stats={stats.reusedFairings}
          text={'FAIRINGS'}
          midText={'REUSABILLITY RATE'}
          percentage={true}
        />
      </Container>
      <StatsTable data={data} />
    </div>
  );
};

export default History;
