import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers';
import icon from '../favicon.png';

import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Logo from '../components/logo';

export const query = graphql`
  fragment SanityImageFragment on SanityImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  fragment SanityGalleryImageFragment on SanityGalleryImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      tagline
      headerImages {
        ...SanityImageFragment
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <HeaderGallery showBackgroundImage>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />

      <div className="header-text">
        <div className="title">
          {/* <img src={icon} alt="" className="brand-image" style={{ width: 256 }} /> */}
          <BrandImage width={256} />
          <h1>{site.title}</h1>
          <h2>{site.tagline}</h2>
        </div>
      </div>
    </HeaderGallery>
  );
};

const HeaderGallery = styled(Layout)`
  max-width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  .header-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    color: white;
    font-family: 'Baloo Bhai', cursive;

    .title {
      margin-top: -100px;
    }

    h1 {
      color: #fff;
      font-size: 5rem;

      @media (max-width: 904px) {
        font-size: 3rem;
      }
    }

    h1,
    h2 {
      margin: 0;
      padding: 0;
      text-shadow: 0px 0px 7px #000a;
    }

    h2 {
      font-family: 'Montserrat', sans-serif;
      font-weight: bolder;
      margin-top: -1rem;
      margin-bottom: 2rem;
    }
  }
  .background-image {
    position: absolute !important;
    opacity: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    transition: opacity 1700ms ease-out;
    &.active-image {
      opacity: 1;
    }
  }

  .brand-image {
    filter: drop-shadow(0px 0px 7px #000a);
    border-radius: 200px;
  }
`;

const BrandImage = styled(Logo)`
  width: 256px;
  margin: 0 auto;

  img {
    filter: drop-shadow(0px 0px 7px #000a);
    border-radius: 200px;
  }
`;

export default IndexPage;
