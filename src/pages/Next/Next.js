import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import useWindowSize from '../../hooks/useWindowSize';
import { getNextLaunch } from '../../utils/apiClient';
import imageSrc from '../../assets/launch_timelapse.jpg';
import { BgImage } from '../../components/BgImage/BgImage.styled';
import Navigation from '../../components/Navigation/Navigation';
import { InnerSection, Wrapper } from './Next.styled';
import Timer from '../../components/Timer/Timer';
import SectionDetails from '../../components/SectionDetails/SectionDetails';

const Next = () => {
  const { status, data, error } = useQuery(['next'], getNextLaunch);

  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <Navigation isMobile={isMobile} />
      <BgImage imgSrc={imageSrc} />
      {data && (
        <Wrapper>
          <InnerSection>
            <Timer date={data.date_local} />
            <div>
              <h3>NEXT LAUNCH</h3>
              <h2>{data.name} MISSION</h2>
              <SectionDetails data={data.details} />
            </div>
          </InnerSection>
        </Wrapper>
      )}
    </motion.div>
  );
};

export default Next;
