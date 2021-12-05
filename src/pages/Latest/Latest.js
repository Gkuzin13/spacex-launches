import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BgImage } from '../../components/BgImage/BgImage';
import imgSrc from '../../assets/launch_fog.jpg';
import client from '../../utils/fetch';
import { SectionWrapper } from './Latest.styled';
import Button from '../../components/Button';
import WebcastSection from '../../components/WebcastSection/WebcastSection';
import Navigation from '../../components/Navigation/Navigation';
const Latest = () => {
  const [data, setData] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    client('launches/latest', { method: 'GET' }).then(
      (data) => {
        console.log(data);
        setData(data);
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
      {videoOpen ? (
        <WebcastSection
          data={data}
          setVideoOpen={setVideoOpen}
          videoOpen={videoOpen}
        />
      ) : (
        <SectionWrapper>
          <h3>{data.upcoming ? 'NEXT LAUNCH' : 'LATEST LAUNCH'}</h3>
          <h2>{data.name} MISSION</h2>
          <Button text={'WATCH WEBCAST'} setVideoOpen={setVideoOpen} />
        </SectionWrapper>
      )}
    </motion.div>
  );
};

export default Latest;
