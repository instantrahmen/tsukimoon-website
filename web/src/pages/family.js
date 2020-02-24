import React from 'react';
import { graphql } from 'gatsby';
import { mapEdgesToNodes } from '../lib/helpers';
import styled from 'styled-components';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import FamilyList from '../components/family-list';
import Layout from '../containers/layout';

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
        <Container coverPhoto={familyCoverPhoto}>
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

const PageContainer = styled.div``;
const H1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  padding: 2rem;
`;
