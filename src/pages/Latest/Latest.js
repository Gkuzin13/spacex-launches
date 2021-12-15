import { useState } from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import useWindowSize from '../../hooks/useWindowSize';
import { getLatestLaunch } from '../../utils/apiClient';
import { BgImage } from '../../components/BgImage/BgImage.styled';
import imgSrc from '../../assets/rockets_sunset.jpg';
import { SectionWrapper, Wrapper } from './Latest.styled';
import Button from '../../components/Button/Button';
import SectionDetails from '../../components/SectionDetails/SectionDetails';
import WebcastSection from '../../components/WebcastSection/WebcastSection';
import Navigation from '../../components/Navigation/Navigation';

const Latest = () => {
  const { status, data, error } = useQuery(['latest'], getLatestLaunch);
  const [videoOpen, setVideoOpen] = useState(false);

  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      <BgImage imgSrc={imgSrc} />
      <Navigation isMobile={isMobile} />
      {data && (
        <Wrapper>
          {videoOpen && (
            <SectionWrapper videoOpen={videoOpen}>
              <div>
                <h3>WEBCAST</h3>
                <h2>{data.name} MISSION</h2>
                <SectionDetails data={data.details} />
              </div>
              <WebcastSection
                data={data}
                setVideoOpen={setVideoOpen}
                videoOpen={videoOpen}
              />
            </SectionWrapper>
          )}
          {!videoOpen && (
            <SectionWrapper>
              <h3>LATEST LAUNCH</h3>
              <h2>{data.name} MISSION</h2>
              <Button text={'WATCH WEBCAST'} setVideoOpen={setVideoOpen} />
            </SectionWrapper>
          )}
        </Wrapper>
      )}
    </motion.div>
  );
};

export default Latest;
