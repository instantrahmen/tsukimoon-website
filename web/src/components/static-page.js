import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import PortableText from './portableText';
import Container from './container';

const StaticPage = ({ className, ...props }) => {
  const { _rawBody, title, mainImage } = props;
  return (
    <Container>
      <article className={className}>
        {mainImage && mainImage.asset && (
          <div className={'mainImage'}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .auto('format')
                .url()}
            />
          </div>
        )}
        <div className={'mainContent'}>
          {/* <h1 className={'title'}>{title}</h1> */}
          {_rawBody && <PortableText blocks={_rawBody} />}
        </div>
      </article>
    </Container>
  );
};

export default styled(StaticPage)`
  max-width: 100%;
  margin: 0 auto;
  background: #fcfcfc;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  .mainImage {
    width: 100%;
    /* background: black; */
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
  }
  .mainContent {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    font-size: 1.2rem;
    h1 {
      font-size: 2.3rem;
    }
    h2 {
      font-size: 2rem;
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
