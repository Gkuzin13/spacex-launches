import { GaugesWrapper } from './GaugesStats.styled';
import Gauge from '../Gauge/Gauge';
import getStats from '../../utils/getStats';

const GaugesStats = ({ data }) => {
  const stats = getStats(data);

  return (
    <GaugesWrapper>
      <Gauge stats={stats.missions} text={'SUCCESSFUL'} midText={'LAUNCHES'} />
      <Gauge
        stats={stats.boosterLandings}
        text={'SUCCESSFUL'}
        midText={'BOOSTER LANDINGS'}
      />
      <Gauge
        stats={stats.reusedBoosters}
        text={'LAUNCHED WITH'}
        midText={'REUSED BOOSTER'}
        percentage={true}
      />
      <Gauge
        stats={stats.reusedFairings}
        text={'LAUNCHED WITH'}
        midText={'REUSED FAIRING'}
        percentage={true}
      />
    </GaugesWrapper>
  );
};

export default GaugesStats;
