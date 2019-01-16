import React from 'react';

import Footer from './Footer';
import avatar from '../assets/images/avatar.png';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="https://www.facebook.com/profile.php?id=100000126586324" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Hi, I'm Connor Mullins</strong> <br />
            Programmer, baker, and relatively functional adult.
          </h1>
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
