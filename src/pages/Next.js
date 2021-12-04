import { useEffect, useState } from 'react';
import imageSrc from '../assets/launch.jpg';
import { BgImage } from '../components/BgImage/BgImage';
import client from '../utils/fetch';
import InnerSection from '../components/InnerSection/InnerSection';
import Button from '../components/Button';

const Next = () => {
  const [data, setData] = useState(null);

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
    <div>
      <BgImage img={imageSrc} />
      <InnerSection data={data} />
    </div>
  );
};

export default Next;
