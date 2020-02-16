import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers';
import icon from '../favicon.png';

import BlogPostPreviewList from '../components/blog-post-preview-list';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';

export const query = graphql`
  fragment SanityImagFragment on SanityImage {
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

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      tagline
      headerImages {
        asset {
          url
        }
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
    <HeaderGallery showBackgroundImage={true}>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />

      <div className="header-text">
        <div className="title">
          <img src={icon} alt="" className="brand-image" style={{ width: 256 }} />
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
    }
    h1,
    h2 {
      margin: 0;
      padding: 0;
      text-shadow: 0px 0px 7px #000a;
    }
  }
  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
  }

  .brand-image {
    filter: drop-shadow(0px 0px 7px #000a);
    border-radius: 200px;
  }
`;

export default IndexPage;
