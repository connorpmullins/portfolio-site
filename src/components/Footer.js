import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://linkedin.com/in/connormullins/"
                rel="noopener noreferrer"
                target="_blank"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/connorpmullins"
                rel="noopener noreferrer"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="http://thelastpaladin.connorpmullins.me/"
                rel="noopener noreferrer"
                target="_blank"
                className="icon fa-gamepad"
              >
                <span className="label">The Last Paladin</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:connorpmullins@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
