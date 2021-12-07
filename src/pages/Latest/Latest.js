import { useState } from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { BgImage } from '../../components/BgImage/BgImage';
import imgSrc from '../../assets/rockets_sunset.jpg';
import { SectionWrapper } from './Latest.styled';
import Button from '../../components/Button';
import WebcastSection from '../../components/WebcastSection/WebcastSection';
import Navigation from '../../components/Navigation/Navigation';
import { getLatestLaunch } from '../../utils/apiClient';

const Latest = () => {
  const { status, data, error } = useQuery(['latest'], getLatestLaunch);
  const [videoOpen, setVideoOpen] = useState(false);

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
      <BgImage img={imgSrc} />
      <Navigation />
      {videoOpen && (
        <SectionWrapper videoOpen={videoOpen}>
          <div>
            <h3>WEBCAST</h3>
            <h2>{data.name} MISSION</h2>
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
    </motion.div>
  );
};

export default Latest;
