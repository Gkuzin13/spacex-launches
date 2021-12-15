import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { getAllLaunches } from '../../utils/apiClient';
import useWindowSize from '../../hooks/useWindowSize';
import { Wrapper } from './History.styled';
import { BgImage } from '../../components/BgImage/BgImage.styled';
import imgSrc from '../../assets/rocket_fog.jpg';
import StatsTable from '../../components/StatsTable.js/StatsTable';
import Navigation from '../../components/Navigation/Navigation';
import GaugesStats from '../../components/GaugesStats/GaugesStats';
import ArrowDown from '../../components/ArrowDown/ArrowDown';

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
  console.log(data);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <Wrapper>
        <BgImage imgSrc={imgSrc} />
        <Navigation height={height} isMobile={isMobile} />
        <GaugesStats data={data.docs} />
        {isMobile && <ArrowDown height={height} />}
        <StatsTable data={data} isMobile={isMobile} />
      </Wrapper>
    </motion.div>
  );
};

export default History;
