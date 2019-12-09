import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './header';

const Layout = ({
  className,
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  nextHeaderImage,
  ...otherProps
}) => (
  <>
    <GlobalStyle />
    <div className={className}>
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

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Baloo|Roboto&display=swap');
body {
  width: 100vw;
  max-width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'roboto';
  color: #121212;
  min-height: 100vh;

}

a {
  color: #00aa20;
}

.rahmenLink {
  color: #00aaff;
}
h1, h2, h3, h4, h5 {
  font-family: 'baloo';
}

footer {
  background: #000c;
  box-sizing: border-box;
  padding: 0px 10px 0px 10px;
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

  .site-info {
    
  }

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
  }

}

`;
export default styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: ${({ siteHeaderImages }) =>
    `url(${siteHeaderImages[0].asset.url}) no-repeat center center fixed`};

  background-size: cover;
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
