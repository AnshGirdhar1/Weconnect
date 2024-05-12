import { Avatar, AvatarGroup } from '@mui/material';
import React from 'react';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Navbar.css';

const Navbar = ({ meetingDetails = {
    meetingName: 'Internal Engineering Meeting',
    meetingDateAndTime: '11 May | 11:00 PM',
    meetingLink: 'msib-weiqkd-3idn',
  }, participantDetails, profileDetails = {
    profileName: 'Alzari Joseph'
  } }) => {
  return (
    <div className='navbar'>
      <div className='container d-flex items-center justify-between'>
        <div className='navbar-left-options d-flex items-center justify-between'>
          <div className='d-flex items-center logo-and-details'>
            <div className='logo'>
              <VideoChatIcon className='shorthand-logo' />
            </div>
            <div>
              <h3>{meetingDetails?.meetingName}</h3>
              <span className='meeting-date-and-time'>
                {meetingDetails?.meetingDateAndTime}
              </span>
            </div>
          </div>
          <div className='d-flex items-center participants-and-link'>
            <div>
              <AvatarGroup total={24}>
                <Avatar
                  alt='Remy Sharp'
                  src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
                <Avatar
                  alt='Travis Howard'
                  src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
                <Avatar
                  alt='Agnes Walker'
                  src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
                <Avatar
                  alt='Trevor Henderson'
                  src='https://images.unsplfash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
              </AvatarGroup>
            </div>
            <div className='meeting-link-container d-flex items-center'>
              <InsertLinkIcon />
              <span>{meetingDetails?.meetingLink}</span>
            </div>
          </div>
        </div>
        <div className='profile-details d-flex items-center justify-between'>
          <div className="d-flex items-center">
            <Avatar />
            <span>{profileDetails?.profileName}</span>
          </div>
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
