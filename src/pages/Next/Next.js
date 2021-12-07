import { motion } from 'framer-motion';
import imageSrc from '../../assets/launch_timelapse.jpg';
import { BgImage } from '../../components/BgImage/BgImage';
import Navigation from '../../components/Navigation/Navigation';
import { InnerSection } from './Next.styled';
import Timer from '../../components/Timer/Timer';
import SectionDetails from '../../components/SectionDetails/SectionDetails';
import { getNextLaunch } from '../../utils/apiClient';
import { useQuery } from 'react-query';

const Next = () => {
  const { status, data, error, isFetching } = useQuery(['next'], getNextLaunch);

  console.log(isFetching);

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
      <Navigation />
      <BgImage img={imageSrc} />
      <InnerSection>
        <Timer date={data.date_local} />
        <div>
          <h3>NEXT LAUNCH</h3>
          <h2>{data.name} MISSION</h2>
          <SectionDetails data={data.details} />
        </div>
      </InnerSection>
    </motion.div>
  );
};

export default Next;
