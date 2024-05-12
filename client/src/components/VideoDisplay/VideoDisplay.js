import './VideoDisplay.css';

const VideoDisplay = ({videoRef}) => {
  return (
    <div className='video-display d-flex items-center'>
      <div className='container'>
        <video
          className='video-frame'
          content='width=device-width, initial-scale=0.5'
          ref={videoRef}
          autoPlay
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default VideoDisplay;
