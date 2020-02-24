import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
// import StaticPage from '../components/static-page';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { toPlainText } from '../lib/helpers';
import FamilyMemberProfile from '../components/family-member-profile';

export const query = graphql`
  query FamilyMemberPageTemplateQuery($id: String!) {
    cutie: sanityFamilyMember(id: { eq: $id }) {
      id
      name
      socialMediaLinks
      image {
        ...SanityImage
      }
      coverPhoto {
        ...SanityImage
      }

      color {
        hex
      }
      slug {
        current
      }
      _rawBio(resolveReferences: { maxDepth: 5 })
      _rawLongBio(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const FamilyMemberPageTemplate = props => {
  const { data, errors } = props;
  const cutie = data && data.cutie;

  console.log({ cutie });

  return (
    <Layout
    // backgroundColor={cutie.color.hex}
    >
      {errors && <SEO title="GraphQL Error" />}
      {cutie && (
        <SEO
          title={cutie.name || 'Untitled'}
          description={toPlainText(cutie._rawBio)}
          image={cutie.image}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {/* {page && <StaticPage {...page} />} */}
      {cutie && (
        <Container coverPhoto={cutie.coverPhoto} coverColor={cutie.color.hex}>
          <FamilyMemberProfile familyMember={cutie} />
        </Container>
      )}
    </Layout>
  );
};

export default FamilyMemberPageTemplate;
