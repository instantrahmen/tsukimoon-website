import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import StaticPage from '../components/static-page';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { toPlainText } from '../lib/helpers';

export const query = graphql`
  query StaticPageTemplateQuery($id: String!) {
    page: sanityStaticPage(id: { eq: $id }) {
      id
      mainImage {
        ...SanityImage
      }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const StaticPageTemplate = props => {
  const { data, errors } = props;
  const page = data && data.page;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {page && (
        <SEO
          title={page.title || 'Untitled'}
          description={toPlainText(page._rawExcerpt)}
          image={page.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {page && <StaticPage {...page} />}
    </Layout>
  );
};

export default StaticPageTemplate;
