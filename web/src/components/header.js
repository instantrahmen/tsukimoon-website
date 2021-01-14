import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import Icon from './icon';
import { cn } from '../lib/helpers';
import Logo from './logo';
import Link from './link-with-state';

// import TwitchLiveIndicator from './twitch-live-indicator';

// import icon from '../favicon.png';
const Header = ({ className, onHideNav, onShowNav, showNav, logoScale = 1 }) => {
  const [navVisible, setNavVisible] = useState(false);
  const data = useStaticQuery(graphql`
    query SiteSettings {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
        description
        keywords
        tagline
      }
    }
  `);

  return (
    <div className={className}>
      <div className={'wrapper'}>
        <div className={'branding'}>
          <Link to="/">
            <HeaderLogo />
            {data.site.title}
          </Link>
        </div>

        <button
          name="Toggle Navigation"
          className={'toggleNavButton'}
          onClick={() => setNavVisible(!navVisible)}
          aria-label="Toggle Navigation"
        >
          <Icon symbol="hamburger" />
        </button>

        <nav className={cn('nav', navVisible && 'showNav')}>
          <ul>
            <NavLink>
              <Link to="/about-tsuki">About Tsuki</Link>
            </NavLink>
            <NavLink>
              <Link to="/family">Tsuki's Family</Link>
            </NavLink>
            <NavLink>
              <Link to="/gallery">Gallery</Link>
            </NavLink>
            <NavLink>
              <Link to="/contact">Contact</Link>
            </NavLink>
            <NavLink noline>
              <a href="https://streamlabs.com/tsukimoonvr/tip#/merch">Store</a>
            </NavLink>
            {/* <NavLink noline>
              <a href="https://streamlabs.com/siatokage/tip">Donate</a>
            </NavLink> */}
          </ul>
        </nav>
        {/* <TwitchLiveIndicator /> */}
      </div>
    </div>
  );
};

const NavLink = ({ children, noline = false }) => (
  <>
    <li>{children}</li>
    {!noline && (
      <li className="divider" role="presentation">
        {' | '}
      </li>
    )}
  </>
);

export default styled(Header)`
  display: flex;
  color: white;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  box-sizing: border-box;
  z-index: 100;

  @media (max-width: 904px) {
    position: fixed;
  }

  .wrapper {
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem 0.5rem 2rem;
    box-sizing: border-box;
    flex-wrap: wrap;

    @media (max-width: 904px) {
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }

  a {
    text-decoration: none;
    color: white;

    &:focus {
      outline: none;
      color: #15ff6d;
      text-decoration: underline;
    }

    &:hover {
      color: #15ff6d;
    }
  }
  .toggleNavButton {
    display: flex;
    @media (min-width: 905px) {
      display: none;
    }

    background: none;
    border: none;
    color: white;
    font-size: 3rem;

    &:focus {
      outline: none;
      color: #15ff6d;
    }
  }
  .branding {
    font-family: 'baloo';
    font-size: 2rem;
    display: flex;
    align-items: center;
    @media (max-width: 904px) {
      font-size: 1.8rem;
    }
    * {
      display: flex;
      align-items: center;
    }
  }
  .nav {
    ul {
      display: flex;
      list-style: none;
      li {
        margin-left: 10px;
      }
    }

    .divider {
      color: #aaaaaa45;
      user-select: none;
    }
    @media (max-width: 904px) {
      display: none;

      .divider {
        display: none;
      }
      &.showNav {
        display: block;
        flex-basis: 100%;
      }
      ul {
        display: block;
        margin: 0;
        padding: 0;
      }

      li {
        display: block;
        box-sizing: border-box;
        a {
          padding: 1rem;
          width: 100%;
          display: block;
          box-sizing: border-box;
        }
        a:hover {
          background: #000000aa;
        }
      }
    }
  }
`;

const HeaderLogo = styled(Logo)`
  width: 4rem;
  @media (max-width: 904px) {
    width: 3rem;
  }
`;
