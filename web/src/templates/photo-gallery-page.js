import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { toPlainText } from '../lib/helpers';
import PhotoGallery from '../components/photo-gallery';
import { random } from 'lodash';
export const query = graphql`
  query PhotoGalleryPageTemplateQuery($id: String!) {
    photoEntry: sanityPhotoEntry(id: { eq: $id }) {
      title
      slug {
        current
      }
      publishedAt
      photos {
        ...SanityGalleryImageFragment
      }
      _rawDescription
    }
  }
`;

const FamilyMemberPageTemplate = props => {
  const { data, errors } = props;
  const photoEntry = data && data.photoEntry;

  // console.log({ photoEntry });

  const coverPhotoIndex = random(0, photoEntry.photos.length - 1);

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {photoEntry && (
        <SEO
          title={photoEntry.title || 'Untitled'}
          description={toPlainText(photoEntry._rawDescription)}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {photoEntry && (
        <Container coverPhoto={photoEntry.photos[coverPhotoIndex]}>
          <PhotoGallery photoEntry={photoEntry} />
        </Container>
      )}
    </Layout>
  );
};

export default FamilyMemberPageTemplate;
