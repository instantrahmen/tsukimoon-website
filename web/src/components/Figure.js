import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import clientConfig from '../../client-config';
import styled from 'styled-components';

const Figure = ({ className, node, noCaption = false, maxWidth = 1920 }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const fluidProps = getFluidGatsbyImage(node.asset._id, { maxWidth }, clientConfig.sanity);
  const hotspot = generateHotspot(node);

  return (
    <figure className={className}>
      <Img fluid={fluidProps} alt={node.alt} />
      {!noCaption && <figcaption>{node.caption}</figcaption>}
    </figure>
  );
};

const generateHotspot = coverPhoto => {
  console.log({ coverPhoto });
  if (!coverPhoto || !coverPhoto.hotspot) {
    return { x: 'center', y: 'center' };
  }
  return {
    x: `${Math.floor(coverPhoto.hotspot.x * 100)}%`,
    y: `${Math.floor(coverPhoto.hotspot.y * 100)}%`
  };
};

export default styled(Figure)`
  object-position: ${({ hotspot }) => `${hotspot.x} ${hotspot.y}`} !important;
`;
