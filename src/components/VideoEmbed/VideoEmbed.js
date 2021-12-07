import { EmbedWrapper } from './VideoEmbed.styled';

const VideoEmbed = ({ title, embedId }) => {
  return (
    <EmbedWrapper>
      <iframe
        width='640'
        height='360'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        autolay='1'
        title={title}
      />
    </EmbedWrapper>
  );
};

export default VideoEmbed;
