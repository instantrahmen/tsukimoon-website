import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import PortableText from './portableText';
import Container from './container';
import Figure from './Figure';

const StaticPage = ({ className, ...props }) => {
  const { _rawBody, title, mainImage } = props;
  return (
    <Container>
      <article className={className}>
        {mainImage && mainImage.asset && (
          <div className={'mainImage'}>
            <Figure noCaption maxWidth={1920} node={mainImage} />
            {/* <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1920)
                .height(Math.floor((9 / 16) * 1920))
                .fit('crop')
                .auto('format')
                .url()}
            /> */}
          </div>
        )}
        <div className={'mainContent'}>{_rawBody && <PortableText blocks={_rawBody} />}</div>
      </article>
    </Container>
  );
};

export default styled(StaticPage)`
  max-width: 100%;
  margin: 0 auto;
  background: none;
  background-position: center;
  position: relative;
  .mainImage {
    margin-top: -79px;
    width: 100%;
    background: black;
    position: sticky;
    top: calc(-500px + 79px);
    z-index: 10;
    left: 0%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    height: 500px;
    border-bottom: 1px solid #1a1;
    display: flex;
    figure {
      width: 100%;
      margin: 0 auto;
      height: 500px;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
  .mainContent {
    max-width: 1600px;
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
    font-size: 1.2rem;
    line-height: 1.5em;
    background: #efefef;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    @media (max-width: 700px) {
      padding: 1rem;
    }

    & > * {
      margin: 0 2rem;
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 0.5rem 0;
      text-align: center;
      line-height: 3rem;
    }
    h1 {
      font-size: 2.5rem;
      margin: 2rem;
    }
    h2 {
      font-size: 2.3rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    figure {
      margin: 0;
      position: relative;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      border-radius: 0.4rem;
      max-width: 100%;
      .gatsby-image-wrapper {
        width: auto;
        height: auto;
      }

      figcaption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
        background: #000a;
        padding: 1rem;
        color: white;
      }
    }
  }
`;
