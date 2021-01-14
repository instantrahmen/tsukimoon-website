import React from 'react';
import styled from 'styled-components';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import Figure from '../components/Figure';
import { useLocation } from '@reach/router';
import { AnimatePresence, motion } from 'framer-motion';

const getDirection = (current = 0, prev = 0) => {
  if (current === -1) return 0;
  const diff = current - prev;
  console.log({ current, prev, diff });

  if (diff < 0) return -1;
  if (diff > 0) return 1;
  return 0;
};

const fuzzyIndexOf = (arr, str) => {
  if (str === '/') return 0;

  const index = arr.findIndex(value => {
    if (value === '/') return false;
    console.log({ value, str, includes: str.includes(value) });
    return str.includes(value);
  });

  console.log({ index, str });
  return index;
};
const Container = ({
  children,
  coverPhoto,
  coverColor = '#1a1',
  coverPhotoHeight = 400,
  fullWidth = false
}) => {
  // const location = useLocation();
  const location = typeof useLocation === 'function' ? useLocation() : { pathname: '/', state: {} };
  const pageOrder = ['/', '/about-tsuki', '/family', '/gallery', '/contact'];

  const currentPage = location.pathname;
  const currentPageIndex = pageOrder.indexOf(currentPage);

  const prevPage = (location.state && location.state.prevPath) || currentPage;
  // const prevPageIndex = pageOrder.indexOf(prevPage);
  const prevPageIndex = fuzzyIndexOf(pageOrder, prevPage);

  const direction = getDirection(currentPageIndex, prevPageIndex);
  // console.log({ location, direction, prevPage, currentPage });

  const animateFromSide = {
    initial: { x: 1000 * direction, y: 1000 * Math.abs(Math.abs(direction) - 1) },
    animate: { x: 0, y: 0 },
    exit: { x: -1000 * direction, y: -1000 * Math.abs(Math.abs(direction) - 1) },
    transition: { type: 'spring', duration: 0.8 }
  };

  const animateFromTop = {
    initial: { y: -1000 },
    animate: { y: 0 },
    exit: { y: -1000 },
    transition: { type: 'spring', duration: 0.5 }
  };
  const hotspot = generateHotspot(coverPhoto);
  return (
    <AnimatePresence>
      <Root className={'root'} hotspot={hotspot} color={coverColor} fullWidth={fullWidth}>
        {coverPhoto && coverPhoto.asset && (
          <motion.div
            className={'mainImage'}
            key={`header-${location.pathname}`}
            {...animateFromTop}
          >
            <Figure maxWidth={1920} node={coverPhoto} noCaption className="img-container" />
          </motion.div>
        )}
        {!coverPhoto && <div className={'mainImage'}></div>}
        <motion.div
          className="page-content"
          key={`content-${location.pathname}`}
          {...animateFromSide}
        >
          {children}
        </motion.div>
      </Root>
    </AnimatePresence>
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

    image-rendering: pixelated;
    /* filter: blur(3px) contrast(115%) brightness(100%); */
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
