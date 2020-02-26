import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import clientConfig from '../../client-config';

export default ({ className, node, noCaption = false, maxWidth = 1920 }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const fluidProps = getFluidGatsbyImage(node.asset._id, { maxWidth }, clientConfig.sanity);
  return (
    <figure className={className}>
      <Img fluid={fluidProps} alt={node.alt} />
      {!noCaption && <figcaption>{node.caption}</figcaption>}
    </figure>
  );
};
