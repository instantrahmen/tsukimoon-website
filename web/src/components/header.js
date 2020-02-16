import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import React, { useState } from 'react';
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
}) => {
  const [navVisible, setNavVisible] = useState(false);
  return (
    <div className={className}>
      <div className={'wrapper'}>
        <div className={'branding'}>
          <Link to="/">
            <Logo scale={logoScale} src={icon} />
            {siteTitle}
          </Link>
        </div>

        <button className={'toggleNavButton'} onClick={() => setNavVisible(!navVisible)}>
          <Icon symbol="hamburger" />
        </button>

        <nav className={cn('nav', navVisible && 'showNav')}>
          <ul>
            <li>
              <Link to="/about-tsuki">About Tsuki</Link>
            </li>
            <li>
              <Link to="/family">Tsuki's Family</Link>
            </li>
            {/* <li>
            <Link to="/">Weekly Photos</Link>
          </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

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

  @media (max-width: 700px) {
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
    @media (min-width: 700px) {
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
    @media (max-width: 700px) {
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
    @media (max-width: 700px) {
      display: none;

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
