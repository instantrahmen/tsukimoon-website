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
    <StyledFigure hotspot={hotspot} className={className}>
      <Img fluid={fluidProps} alt={node.alt} />
      {!noCaption && <figcaption>{node.caption}</figcaption>}
    </StyledFigure>
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

export default Figure;

const StyledFigure = styled.figure`
  object-position: ${({ hotspot }) => `${hotspot.x} ${hotspot.y}`} !important;
`;
