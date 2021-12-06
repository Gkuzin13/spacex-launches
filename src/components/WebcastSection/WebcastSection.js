import { CloseOutlined } from '@ant-design/icons';
import VideoEmbed from '../VideoEmbed/VideoEmbed';
import { Wrapper, ReturnButton } from './WebcastSection.styled';

const WebcastSection = ({ data, setVideoOpen, videoOpen }) => {
  function onClick() {
    setVideoOpen(!videoOpen);
  }
  return (
    <Wrapper>
      <VideoEmbed title={data.name} embedId={data.links.youtube_id} />
      <ReturnButton onClick={onClick}>
        <CloseOutlined />
        <span>CLOSE</span>
      </ReturnButton>
    </Wrapper>
  );
};

export default WebcastSection;
