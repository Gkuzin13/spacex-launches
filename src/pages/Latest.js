import { useEffect, useState } from 'react';
import { BgImage } from '../components/BgImage/BgImage';
import imgSrc from '../assets/launch_fog.jpg';
import client from '../utils/fetch';
import { Wrapper } from './Latest.styled';
import VideoEmbed from '../components/VideoEmbed/VideoEmbed';
import Button from '../components/Button';

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
    <div>
      <BgImage img={imgSrc} />
      {videoOpen ? (
        <div>
          <VideoEmbed title={data.name} embedId={data.links.youtube_id} />
          <Button
            text={'RETURN'}
            setVideoOpen={setVideoOpen}
            videoOpen={videoOpen}
          />
        </div>
      ) : (
        <Wrapper>
          <h3>{data.upcoming ? 'NEXT LAUNCH' : 'RECENT LAUNCH'}</h3>
          <h2>{data.name} MISSION</h2>
          <Button text={'WATCH WEBCAST'} setVideoOpen={setVideoOpen} />
        </Wrapper>
      )}
    </div>
  );
};

export default Latest;
