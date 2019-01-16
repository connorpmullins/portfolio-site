import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery';

import thumb01 from '../assets/images/thumbs/sonderCrop.png';
import thumb02 from '../assets/images/thumbs/socialCrop.png';
import thumb03 from '../assets/images/thumbs/gameCrop.png';
import thumb04 from '../assets/images/thumbs/wireCrop.jpg';
import thumb05 from '../assets/images/thumbs/05.jpg';
import thumb06 from '../assets/images/thumbs/06.jpg';

import full01 from '../assets/images/fulls/_16.57.png';
import full04 from '../assets/images/fulls/_16.57.png';
import full05 from '../assets/images/fulls/_16.57.png';
import full06 from '../assets/images/fulls/_16.57.png';

import sonder01 from '../assets/images/fulls/_16.57.png';
import sonder02 from '../assets/images/fulls/_21.04.png';
import sonder03 from '../assets/images/fulls/_16.19.png';
import sonder04 from '../assets/images/fulls/feedback.png';
import sonder05 from '../assets/images/fulls/friendfeed1.png';
import sonder06 from '../assets/images/fulls/friendfeed2.png';
import sonder07 from '../assets/images/fulls/profile.png';

import social01 from '../assets/images/fulls/_24.46.png';
import social02 from '../assets/images/fulls/_24.59.png';
import social03 from '../assets/images/fulls/_25.17.png';
import social04 from '../assets/images/fulls/_25.26.png';

import game1 from '../assets/images/fulls/game1.png';
import game2 from '../assets/images/fulls/game2.png';
import game3 from '../assets/images/fulls/game3.png';
import game4 from '../assets/images/fulls/game4.png';
import game5 from '../assets/images/fulls/game5.png';

import wire1 from '../assets/images/fulls/wire1.jpg';
import wire2 from '../assets/images/fulls/wire2.jpg';
import wire3 from '../assets/images/fulls/wire3.jpg';
import wire4 from '../assets/images/fulls/wire4.jpg';
import wire5 from '../assets/images/fulls/wire5.jpg';

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: [
      {src: sonder01},
      {src: sonder02},
      {src: sonder03},
      {src: sonder04},
      {src: sonder05},
      {src: sonder06},
      {src: sonder07},
    ],
    thumbnail: thumb01,
    caption: 'Sonder',
    description: 'Features I developed for the Sonder social media application',
    link:"https://gitlab.com/SonderSocial/Sonder",
  },
  {
    id: '2',
    src: [
      {src: game5},
      {src: game1},
      {src: game2},
      {src: game3},
      {src: game4},
    ],
    thumbnail: thumb03,
    caption: 'The Last Paladin',
    description: 'A webgame I developed using JavaScript',
    link:"http://thelastpaladin.connorpmullins.me/",
  },
  {
    id: '3',
    src: [
      {src: social01},
      {src: social02},
      {src: social03},
      {src: social04},
    ],
    thumbnail: thumb02,
    caption: 'Sonder.social',
    description: 'Screenshots of the SPA I built for Sonder',
    link:"https://www.sonder.social/",
  },
  {
    id: '4',
    src: [
      {src: wire1},
      {src: wire2},
      {src: wire3},
      {src: wire4},
      {src: wire5},
    ],
    thumbnail: thumb04,
    caption: 'UI/UX Wireframes',
    description: 'Samples of my wireframing work',
    link:"https://imgur.com/gallery/GJL4dgG",
  }
];

class HomeIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  render() {
    const siteTitle = "Connor Mullin's Portfolio";
    const siteDescription = 'A showcase of programming porjects';

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>JavaScript - React.js - React Native - Redux - Express.js</h2>
            </header>
            <p>
              I develop mobile applications in React Native, build webgames in
              vanilla JavaScript, write web apps in React, construct servers
              with Express, and (usually) handle state management with Redux. I
              am self-taught, motivated, learn quickly, and am interested in
              making the world a better place. Please check out github to view
              my coding projects.
            </p>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description, link }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                  link,
                })
              )}
            />

            <ul className="actions">
              <li />
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              If you're looking to hire a developer, want to use code I've
              written, or just want to chat, reach out to me via phone, email,
              or the form below!
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    986 Bridgewood Way
                    <br />
                    Sunnyvale, CA 94089
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    (623)-208-8664
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:connorpmullins@gmail.com">
                      connorpmullins@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
