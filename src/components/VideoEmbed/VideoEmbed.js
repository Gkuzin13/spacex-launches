import React from 'react';

const VideoEmbed = ({ title, embedId }) => {
  return (
    <div>
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
    </div>
  );
};

export default VideoEmbed;
