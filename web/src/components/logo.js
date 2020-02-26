import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Figure from './Figure';

const Logo = ({ className, width = 100 }) => {
  const data = useStaticQuery(graphql`
    query SiteLogo {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        logoImage {
          ...SanityImageFragment
        }
      }
    }
  `);
  return (
    <>
      {data.site.logoImage && (
        <Figure className={className} noCaption maxWidth={width} node={data.site.logoImage} />
      )}
    </>
  );
};

export default styled(Logo)`
  margin: 0;
  margin-right: 1rem;
  width: ${({ maxWidth }) => `${maxWidth}px`};
  transform-origin: center center;
  position: relative;

  * {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  img {
    filter: drop-shadow(0px 0px 7px #000a);
  }
`;
