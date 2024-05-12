import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import VideoDisplay from '../../components/VideoDisplay/VideoDisplay';
import './CallScreen.css';
import { createVideoStream } from '../../helpers/createVideoStream';

const CallScreen = () => {
  const videoRef = useRef(null);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  useEffect(() => {
    createVideoStream(
      { audio: true, video: { width: 600, height: 350 } },
      videoRef
    );
  }, []);

  const onOffCamera = () => {
    videoRef.current.srcObject?.getTracks()?.forEach((track) => {
      if (track.kind === 'video') {
        track.enabled = !track.enabled;
        setIsVideoEnabled(track.enabled);
      }
    });
  };

  const muteUnmute = () => {
    videoRef.current.srcObject?.getTracks()?.forEach((track) => {
      if (track.kind === 'audio') {
        track.enabled = !track.enabled;
        setIsAudioEnabled(track.enabled);
      }
    });
  };
  return (
    <div className='d-flex flex-d-column call-screen'>
      <Navbar />
      <VideoDisplay videoRef={videoRef} />
      <Footer
        onOffCamera={onOffCamera}
        muteUnmute={muteUnmute}
        isAudioEnabled={isAudioEnabled}
        isVideoEnabled={isVideoEnabled}
      />
    </div>
  );
};

export default CallScreen;
