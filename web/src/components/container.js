import React from 'react';
import styled from 'styled-components';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import Figure from '../components/Figure';

const Container = ({
  children,
  coverPhoto,
  coverColor = '#1a1',
  coverPhotoHeight = 400,
  fullWidth = false
}) => {
  const hotspot = generateHotspot(coverPhoto);
  // console.log({ hotspot });
  return (
    <Root className={'root'} hotspot={hotspot} color={coverColor} fullWidth={fullWidth}>
      {coverPhoto && coverPhoto.asset && (
        <div className={'mainImage'}>
          <Figure maxWidth={1920} node={coverPhoto} noCaption className="img-container" />
        </div>
      )}
      {!coverPhoto && <div className={'mainImage'}></div>}
      <div className="page-content">{children}</div>
    </Root>
  );
};

const generateHotspot = coverPhoto => {
  if (!coverPhoto || !coverPhoto.hotspot) {
    return { x: 'center', y: 'center' };
  }
  return {
    x: `${Math.floor(coverPhoto.hotspot.x * 100)}%`,
    y: `${Math.floor(coverPhoto.hotspot.y * 100)}%`
  };
};

export default Container;

const Root = styled.div`
  .page-content {
    background: #efefef;
    min-height: 100vh;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 100vw;
    margin: 0 auto;
    position: relative;
    max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '1200px')};
    box-sizing: border-box;
    padding: 1rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 0;
      padding: 1rem 0;
    }
  }

  .mainImage {
    margin-top: -79px;
    width: 100%;
    background: black;
    position: sticky;
    top: calc(-400px + 79px);

    z-index: 10;
    left: 0%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    height: ${({ coverPhotoHeight = 400 }) => `${coverPhotoHeight}px`};
    border-bottom: 1px solid ${({ color }) => color};
    display: flex;
    background: ${({ color }) => color};

    @media (max-width: 904px) {
      top: calc(-400px + 67px);
    }
    figure {
      width: 100%;
      margin: 0 auto;
      height: ${({ coverPhotoHeight = 400 }) => `${coverPhotoHeight}px`};
      overflow: hidden;

      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: cover;
        object-position: ${({ hotspot }) => `${hotspot.x} ${hotspot.y}`} !important;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
