import { useEffect, useState } from 'react';
import imageSrc from '../assets/launch.jpg';
import NextSection from '../components/NextSection/NextSection';
import { BgImage } from '../components/BgImage/BgImage';
import client from '../utils/fetch';
import Timer from '../components/Timer/Timer';

const Next = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   client('launches/next').then(
  //     (data) => {
  //       // console.log(data);
  //       setData(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }, []);

  if (!data) {
    return <></>;
  }
  return (
    <div>
      <BgImage img={imageSrc} />
      <NextSection data={data} />
    </div>
  );
};

export default Next;
