import React from 'react';
import { Link } from '@mui/material';
import { MdDashboard, MdChat, MdPerson, MdEventNote, MdSearch, MdEqualizer, MdFolder, MdSettings } from 'react-icons/md';
import { BsFillGridFill, BsImage, BsYoutube, BsEnvelope, BsCalendar, BsBook } from 'react-icons/bs';
import styled from '@emotion/styled';

const GoogleApps = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  margin-top:20px;
  ${'' /* border: 1px solid;
  padding: 10px;
  box-shadow: 5px 1px #888888; */}
`;

const GoogleAppLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-left: 90px;
  ${'' /* color: #333; */}
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  ${'' /* transition: color 0.3s ease-in-out; */}
  transition: .2s linear;

  &:hover {
    color: #000;
    transition-duration: 300ms;
    transform: scale(1.05);
  }
`;

const GoogleAppIcon = styled.span`
  margin-right: 8px;
  font-size: 20px;
  margin-top:3px;
  
`;

const GoogleAppsComponent = () => {
  return (
    <GoogleApps>
      <GoogleAppLink href="#">
        <GoogleAppIcon>
          <BsFillGridFill />
        </GoogleAppIcon>
        Drive
      </GoogleAppLink>
      <GoogleAppLink href="#">
        <GoogleAppIcon>
          <BsImage />
        </GoogleAppIcon>
        Photos
      </GoogleAppLink>
      <GoogleAppLink href="#">
        <GoogleAppIcon>
          <BsYoutube />
        </GoogleAppIcon>
        YouTube
      </GoogleAppLink>
      <GoogleAppLink href="#">
        <GoogleAppIcon>
          <BsEnvelope />
        </GoogleAppIcon>
        Gmail
      </GoogleAppLink>
      <GoogleAppLink href="#">
        <GoogleAppIcon>
          <BsCalendar />
        </GoogleAppIcon>
        Calendar
      </GoogleAppLink>
      <GoogleAppLink href="#">
        <GoogleAppIcon>
          <BsBook />
        </GoogleAppIcon>
        Contacts
      </GoogleAppLink>
    </GoogleApps>
  );
};

export default GoogleAppsComponent;
