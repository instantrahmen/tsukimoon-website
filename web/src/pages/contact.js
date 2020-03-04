import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';

export const query = graphql`
  query ContactPageQuery {
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
  }
`;

const ContactPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const siteSettings = data.site;

  return (
    <PageContainer>
      <Layout>
        <SEO title="Tsuki's Family" />
        <Container coverPhoto={siteSettings.headerImages[0]}>
          <form name="contact" netlify>
            <p>
              <label>
                Name <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Email <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message <textarea name="message" placeholder="message" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </Container>
      </Layout>
    </PageContainer>
  );
};

export default ContactPage;

const PageContainer = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #999;
    border-radius: 0.3rem;
    font-size: 1rem;
  }

  textarea {
    flex-basis: 1;
    /* grid-column-start: 3; */
  }
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  padding: 2rem;
`;
