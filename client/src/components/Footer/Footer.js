import { Button } from '@mui/material';
import React from 'react';
import './Footer.css';
import SwitchButton from '../SwitchButton/SwitchButton';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import CallEndIcon from '@mui/icons-material/CallEnd';

const Footer = ({
  onOffCamera,
  muteUnmute,
  isAudioEnabled,
  isVideoEnabled,
}) => {
  return (
    <div className='footer d-flex justify-center items-center'>
      <SwitchButton
        onClick={onOffCamera}
        isEnabled={isVideoEnabled}
        enabledIcon={<VideocamIcon />}
        notEnabledIcon={<VideocamOffIcon />}
      />
      <SwitchButton
        onClick={muteUnmute}
        isEnabled={isAudioEnabled}
        enabledIcon={<MicIcon />}
        notEnabledIcon={<MicOffIcon />}
      />
      <Button className='end-call-btn'>
        <CallEndIcon />
      </Button>
    </div>
  );
};

export default Footer;
