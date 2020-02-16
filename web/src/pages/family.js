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

export const query = graphql`
  query FamilyePageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      tagline
      familyCoverPhoto {
        ...SanityImagFragment
      }
      headerImages {
        asset {
          url
        }
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
              <img
                src={imageUrlFor(buildImageObj(familyCoverPhoto))
                  .width(1920)
                  .height(1080)
                  .fit('crop')
                  .auto('format')
                  .url()}
              />
            </div>
          )}
          <div class="family-page-content">
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
    background: #f6f6f6;
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
    img {
      width: 100%;
      /* max-width: 1600px; */
      margin: 0 auto;
      height: 500px;
      object-fit: cover;
    }
  }
`;
const H1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  padding: 2rem;
`;
