import { useEffect, useState } from 'react';
import { BgImage } from '../components/BgImage/BgImage';
import imgSrc from '../assets/rockets_sunset.jpg';
import client from '../utils/fetch';
import Stats from '../components/Stats/Stats';

const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client('launches/past').then(
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
      <Stats data={data} />
    </div>
  );
};

export default History;
