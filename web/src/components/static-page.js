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
    <Container coverPhoto={mainImage} {...props}>
      <article className={className}>
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

  .mainContent {
    padding: 2rem;
    box-sizing: border-box;
    font-size: 1.2rem;
    line-height: 1.5em;
    background: #efefef;

    @media (max-width: 904px) {
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
