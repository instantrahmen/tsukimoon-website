import React from 'react';
import { graphql } from 'gatsby';
import { mapEdgesToNodes } from '../lib/helpers';
import styled from 'styled-components';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import FamilyList from '../components/family-list';
import Layout from '../containers/layout';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import Figure from '../components/Figure';
export const query = graphql`
  query FamilyePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      tagline
      familyCoverPhoto {
        ...SanityImageFragment
      }
      headerImages {
        ...SanityImageFragment
      }
    }
    familyMembers: allSanityFamilyMember(filter: {}) {
      edges {
        node {
          id
          name
          image {
            asset {
              url
            }
            tags
            caption
            ...SanityImage
          }
          slug {
            current
          }
          color {
            rgb {
              r
              g
              b
              a
            }
          }
          _rawBio
          slug {
            current
          }
          socialMediaLinks
          sortIndex
        }
      }
    }
  }
`;

const FamilyPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const familyNodes = data && data.familyMembers && mapEdgesToNodes(data.familyMembers);
  const siteSettings = data.site;
  const { familyCoverPhoto } = siteSettings;

  return (
    <PageContainer>
      <Layout>
        <SEO title="Tsuki's Family" />
        <Container>
          {familyCoverPhoto && familyCoverPhoto.asset && (
            <div className={'mainImage'}>
              <Figure maxWidth={1920} node={familyCoverPhoto} noCaption className="img-container" />
            </div>
          )}
          <div className="family-page-content">
            <H1>Tsuki's Family</H1>
            {familyNodes && familyNodes.length > 0 && (
              <FamilyList items={familyNodes} siteSettings={siteSettings} />
            )}
          </div>
        </Container>
      </Layout>
    </PageContainer>
  );
};

export default FamilyPage;

const PageContainer = styled.div`
  .family-page-content {
    box-sizing: border-box;
    max-width: 1600px;
    width: 100%;
    background: #efefef;
    margin: 0 auto;
    padding: 0 2rem 2rem 2rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
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
    figure {
      width: 100%;
      /* max-width: 1600px; */
      margin: 0 auto;
      height: 500px;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
const H1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  padding: 2rem;
`;
