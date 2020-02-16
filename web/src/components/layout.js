import './global.css';
import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import Header from './header';
import clientConfig from '../../client-config';

const Layout = ({
  className,
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  nextHeaderImage,
  siteHeaderImages,
  currentHeaderImage,
  showBackgroundImage = false,
  ...otherProps
}) => {
  const headerImage = siteHeaderImages[currentHeaderImage];

  return (
    <>
      <GlobalStyle />
      <div className={className}>
        {showBackgroundImage && (
          <HeaderImage
            siteHeaderImages={siteHeaderImages}
            currentHeaderImage={currentHeaderImage}
          />
        )}
        <Header
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
          {...otherProps}
        />
        <div className="content">{children}</div>
        <footer className="footer">
          <div className="footer-wrapper">
            <div className="site-info">&copy; Tsukimoon {new Date().getFullYear()}</div>
            <div className="attribution">
              Website built and designed by{' '}
              <a className={'rahmenLink'} href="https://twitter.com/myrahmen">
                instantRahmen
              </a>
            </div>
            <ul className="social-media-links">
              <li>
                <a href="https://twitter.com/TsukimoonVR">Twitter</a>
              </li>
              <li>
                <a href="https://twitch.tv/TsukimoonVR">Twitch</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

const HeaderImage = ({ siteHeaderImages, currentHeaderImage }) => {
  return siteHeaderImages.map((currentImage, index) => (
    <Img
      key={`background-image-${siteHeaderImages[index].asset._id}`}
      fluid={getFluidGatsbyImage(
        siteHeaderImages[index].asset._id,
        { maxWidth: 3840 },
        clientConfig.sanity
      )}
      className={`background-image ${index === currentHeaderImage && 'active-image'}`}
    />
  ));
};

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  width: .6rem;
  position: fixed;
  background: #fff3;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), inset 0 3px 6px rgba(0, 0, 0, 0.23);
}
 
::-webkit-scrollbar-thumb {
  border-radius: 3rem;
  background: #66aa77;
}

body {
  width: 100vw;
  max-width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'roboto';
  color: #121212;
  min-height: 100vh;
  overflow: overlay;
  background-color: #68bd5e;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232ea12e' fill-opacity='0.32' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

a {
  color: #00aa20;
}

.rahmenLink {
  color: #00aaff;

  a:focus {
    outline: none;
    text-decoration: underline;
  }
}
h1, h2, h3, h4, h5 {
  font-family: 'baloo';
}

footer {
  background: #000c;
  box-sizing: border-box;
  padding: 0px 2rem 0px 2rem;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
  }
}

.footer-wrapper {
  box-sizing: border-box;
  align-items: center;
  margin: 0 auto;
  max-width: 9600px;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  .attribution {
    font-size: .9rem;
  }

  .social-media-links {

    list-style: none;
    display: flex;
    flex-direction: row;
    li {
      margin-left: 10px;
    }

    a:hover {
      color: #15ff30;
    }
    
    a:focus {
      outline: none;
      color: #15ff6d;
      text-decoration: underline;
    }
  }
}
`;
export default styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  position: relative;
  background: none;
  .content {
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%);
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;
