import { Button } from '@mui/material';
import React from 'react';
import './SwitchButton.css';

const SwitchButton = ({ isEnabled, enabledIcon, notEnabledIcon, onClick }) => {
  const color = isEnabled ? '#FFFFFF' : '#0060FF';
  const backgroundColor = isEnabled ? '#0060FF' : '#DFEBFF';
  return (
    <Button
      className='switch-button'
      style={{ color, backgroundColor }}
      onClick={onClick}
    >
      {isEnabled ? enabledIcon : notEnabledIcon}
    </Button>
  );
};

export default SwitchButton;
