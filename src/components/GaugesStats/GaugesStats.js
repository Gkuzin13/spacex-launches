import { GaugesWrapper } from './GaugesStats.styled';
import Gauge from '../Gauge/Gauge';
import getStats from '../../utils/getStats';

const GaugesStats = ({ data }) => {
  const stats = getStats(data);

  return (
    <GaugesWrapper>
      <Gauge stats={stats.missions} text={'SUCCESSFUL'} midText={'MISSIONS'} />
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
    </GaugesWrapper>
  );
};

export default GaugesStats;
