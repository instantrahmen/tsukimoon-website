import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import React from 'react';
import Icon from './icon';
import { cn } from '../lib/helpers';
import icon from '../favicon.png';
const Header = ({
  className,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  logoScale = 1,
  siteHeaderImages,
  currentHeaderImage
}) => (
  <div className={className}>
    <HeaderBackground siteHeaderImages={siteHeaderImages} currentHeaderImage={currentHeaderImage} />
    <div className={'wrapper'}>
      <div className={'branding'}>
        <Link to="/">
          <Logo scale={logoScale} src={icon} />
          {siteTitle}
        </Link>
      </div>

      {/* <Logo scale={logoScale} src={icon} /> */}

      {/* <button className={'toggleNavButton'} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button> */}

      <nav className={cn('nav', showNav && 'showNav')}>
        <ul>
          <li>
            <Link to="/about-tsuki">About Tsuki</Link>
          </li>
          <li>
            <Link to="/">Tsuki's Family</Link>
          </li>
          <li>
            <Link to="/">Daily Photos</Link>
          </li>
          {/* <li>
            <Link to="/">Archive</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  </div>
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

  .wrapper {
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 1rem;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: #15ff6d;
    }
  }

  .branding {
    font-family: 'baloo';
    font-size: 2rem;
    display: flex;
    align-items: center;
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
  }
`;

const Logo = styled.img`
  margin-right: 1rem;
  /* position: fixed; */
  width: 64px;
  transform-origin: center center;
  filter: drop-shadow(0px 0px 7px #000a);
`;

const HeaderBackground = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  z-index: -100;
  background: ${({ siteHeaderImages }) =>
    `url(${siteHeaderImages[0].asset.url}) no-repeat center center fixed`};

  background-size: cover;
  top: 0;
  left: 0;
`;
