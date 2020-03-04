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
          <h1>Get in contact with me!</h1>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input
              aria-label="name"
              className="name"
              placeholder="name"
              type="text"
              name="name"
              required
            />

            <input
              aria-label="email"
              className="email"
              placeholder="email"
              type="email"
              name="email"
              required
            />

            <textarea
              required
              aria-label="message"
              name="message"
              placeholder="message"
              className="message"
            />
            <div className="submit">
              <button name="submit" type="submit">
                Send
              </button>
            </div>
          </form>
        </Container>
      </Layout>
    </PageContainer>
  );
};

export default ContactPage;

const PageContainer = styled.div`
  h1,
  h2,
  h3 {
    text-align: center;
  }
  form {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    grid-template-areas:
      'name email'
      'message message'
      'submit submit';

    width: 900px;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    grid-gap: 10px;

    @media (max-width: 700px) {
      grid-template-areas:
        'name name'
        'email email'
        'message message'
        'submit submit';
    }
  }

  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #999;
    border-radius: 0.3rem;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .name {
    grid-area: name;
  }
  .email {
    grid-area: email;
  }

  .message {
    grid-area: message;
    /* height: 20rem; */
    height: 300px;
  }

  .submit {
    grid-area: submit;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 3rem;

    button {
      width: 100%;
      height: 100%;
      background: #68bd5e;
      border: 1px solid #23ac78;
      border-radius: 0.3rem;
    }
  }
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  padding: 2rem;
`;
