import { useEffect, useState } from 'react';
import { BgImage } from '../components/BgImage/BgImage';
import imgSrc from '../assets/launch_fog.jpg';
import styled from 'styled-components';
import Button from '../components/Button';

const InnerSection = styled.div`
  position: absolute;
  width: auto;
  bottom: 15%;
  left: 25px;
  right: 25px;
  color: white;

  @media (min-width: 768px) {
    bottom: 20%;
    left: 100px;
    right: 100px;
  }

  h3 {
    font-weight: normal;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;
const Recent = () => {
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
      <BgImage img={imgSrc} />
      <InnerSection>
        <h3>RECENT LAUNCH</h3>
        <h2>{data.name} MISSION</h2>
        <Button text={'WATCH WEBCAST'} />
      </InnerSection>
    </div>
  );
};

export default Recent;
