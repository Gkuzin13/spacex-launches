import { useEffect, useState } from 'react';
import styled from 'styled-components';
import imageSrc from '../assets/launch_fog.jpg';
import MainSection from '../components/MainSection';
import Navigation from '../components/Navigation/Navigation';

import client from '../utils/fetch';

const BgImage = styled.div`
  background: linear-gradient(
      90deg,
      rgba(112, 112, 112, 0) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  width: 100%;
  min-height: 100%;
  z-index: -99;
`;

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
      <BgImage />
      <Navigation />
      <MainSection data={data} />
    </div>
  );
};

export default Main;
