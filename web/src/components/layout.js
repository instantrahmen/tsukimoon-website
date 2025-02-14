import './global.css';
import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import Header from './header';
import clientConfig from '../../client-config';
import SocialMediaLink from './social-media-link';

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
  backgroundColor = '#68bd5e',
  showBackgroundImage = false,
  ...otherProps
}) => {
  const data = useStaticQuery(graphql`
    query SiteSettingsForLayout {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        socialMediaLinks
      }
    }
  `);

  return (
    <LayoutRootContainer>
      <PageBody backgroundColor={backgroundColor}>
        <GlobalStyle />
        <div className={className}>
          {showBackgroundImage && (
            <HeaderImage
              siteHeaderImages={siteHeaderImages}
              currentHeaderImage={currentHeaderImage}
              // location={location}
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
              <div className="attribution only-large-screen">
                Website built and designed by{' '}
                <a className={'rahmenLink'} href="https://twitter.com/myrahmen">
                  instantRahmen 💙
                </a>
              </div>
              {/* Social Media Links */}
              <ul className="social-media-links">
                {data.site.socialMediaLinks.map((link, index) => (
                  <li key={`${link}-${index}`}>
                    <SocialMediaLink includeIcon={false} url={link} includeName />
                  </li>
                ))}
              </ul>
              <div className="attribution only-small-screen">
                Website built and designed by{' '}
                <a className={'rahmenLink'} href="https://twitter.com/myrahmen">
                  instantRahmen
                </a>
              </div>
            </div>
          </footer>
        </div>
      </PageBody>
    </LayoutRootContainer>
  );
};

const HeaderImage = ({ siteHeaderImages, currentHeaderImage, location }) => {
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
  background: #aaaaff;
}

body {
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
  overflow-y: overlay;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  color: #121212;
  min-height: 100vh;
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
  font-weight: 300;
}

footer {
  background: #000c;
  box-sizing: border-box;
  padding: 0px 2rem 0px 2rem;
  align-items: center;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
}

.footer-wrapper {
  box-sizing: border-box;
  align-items: center;
  margin: 1rem auto;
  max-width: 9600px;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  .attribution {
    font-size: .9rem;
    
    @media (max-width: 904px) {
      &.only-small-screen {
        display: auto;
      }

      &.only-large-screen {
        display: none;
      }
    }

    @media (min-width: 905px) {
      &.only-small-screen {
        display: none;
      }

      &.only-large-screen {
        display: auto;
      }
    }
  }

  .social-media-links {

    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;

    li {
      margin-left: 1rem;
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

  @media (max-width: 904px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;

    & > * {
      margin-top: 1rem;
    }

    .social-media-links {
      text-align: center;
      justify-content: center;
      margin-top: 1rem;

    }

    .attribution {
      flex-basis: 100%;
      width: 100%;
    }
  }
}
`;

const LayoutRootContainer = styled.div`
  background-color: ${({ backgroundColor = '#68bd5e' }) => backgroundColor};
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c3c3c3' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  background-blend-mode: multiply;
  min-height: 100vh;
  z-index: -100;
`;

const PageBody = styled.div`
  background: none;
`;

export default styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  .content {
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%);
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;
