import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import PortableText from './portableText';
import Container from './container';

const StaticPage = ({ className, ...props }) => {
  const { _rawBody, title, mainImage } = props;
  console.log({ _rawBody });
  return (
    <Container>
      <article className={className}>
        {mainImage && mainImage.asset && (
          <div className={'mainImage'}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1920)
                .height(Math.floor((9 / 16) * 1920))
                .fit('crop')
                .auto('format')
                .url()}
            />
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
  /* background: #8c8; */
  /* color: white; */
  background-color: #68bd5e;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232ea12e' fill-opacity='0.32' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */

  /* background-attachment: fixed; */
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
    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
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
      /* max-width: 1000px; */
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
      border-radius: 1rem;
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
