import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import clientConfig from '../../client-config';

export default ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const fluidProps = getFluidGatsbyImage(node.asset._id, { maxWidth: 10000 }, clientConfig.sanity);
  console.log({ fluidProps });
  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};
