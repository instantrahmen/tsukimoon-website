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

  return (
    <Layout>
      <SEO title="Tsuki's Family" />
      <Container>
        <H1>Tsuki's Family</H1>
        {familyNodes && familyNodes.length > 0 && <FamilyList items={familyNodes} />}
      </Container>
    </Layout>
  );
};

export default FamilyPage;

const H1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 3rem;
  padding: 0;
`;
