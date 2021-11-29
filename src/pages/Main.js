import { useEffect, useState } from 'react';
import imageSrc from '../assets/launch.jpg';
import MainSection from '../components/MainSection';
import { BgImage } from '../components/BgImage/BgImage';
import client from '../utils/fetch';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // client('launches/latest').then(
    //   (data) => {
    //     console.log(data);
    //     setData(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }, []);

  if (!data) {
    return <></>;
  }
  return (
    <div>
      <BgImage img={imageSrc} />
      <MainSection data={data} />
    </div>
  );
};

export default Main;
