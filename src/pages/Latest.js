import { useEffect, useState } from 'react';
import { BgImage } from '../components/BgImage/BgImage';
import imgSrc from '../assets/launch_fog.jpg';
import client from '../utils/fetch';
import InnerSection from '../components/InnerSection/InnerSection';

const Latest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client('launches/latest').then(
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
    <div>
      <BgImage img={imgSrc} />
      <InnerSection data={data} />
    </div>
  );
};

export default Latest;
