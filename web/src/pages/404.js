import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';

export const query = graphql`
  query PageQuery404 {
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

const NotFoundPage = props => {
  const { data, errors } = props;

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Container coverPhoto={data.site.headerImages[0]}>
        <h1>Page not found</h1>
        <p>I searched hard and couldn't find that page. ;n;</p>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
