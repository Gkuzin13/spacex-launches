import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { getAllLaunches } from '../../utils/apiClient';
import useWindowSize from '../../hooks/useWindowSize';
import { BgImage } from '../../components/BgImage/BgImage';
import imgSrc from '../../assets/rocket_fog.jpg';
import { Wrapper } from './History.styled';
import StatsTable from '../../components/StatsTable.js/StatsTable';
import Navigation from '../../components/Navigation/Navigation';
import ScrollArrow from '../../components/ScrollArrow/ScrollArrow';
import GaugesStats from '../../components/GaugesStats/GaugesStats';

const History = () => {
  const { status, data, error } = useQuery(['all'], getAllLaunches);

  const { width, height } = useWindowSize();
  const isMobile = width < 768;

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  if (!data) {
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
        <Navigation height={height} isMobile={isMobile} />
        <GaugesStats data={data.docs} />
        {isMobile && <ScrollArrow height={height} />}
        <StatsTable data={data} />
      </Wrapper>
    </motion.div>
  );
};

export default History;
