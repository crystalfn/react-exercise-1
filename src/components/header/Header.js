import React from 'react';
import avatar from '../../assets/avatar.jpg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={avatar} alt="avatar.jpg" />
      <h1>HELLO,</h1>
      <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
    </header>
  );
};

export default Header;
