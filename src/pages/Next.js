import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import imageSrc from '../assets/launch.jpg';
import { BgImage } from '../components/BgImage/BgImage';
import client from '../utils/fetch';
import Navigation from '../components/Navigation/Navigation';
const Next = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client('launches/next', { method: 'GET' }).then(
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
      <BgImage img={imageSrc} />
    </motion.div>
  );
};

export default Next;
