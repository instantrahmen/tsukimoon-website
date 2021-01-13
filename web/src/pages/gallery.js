import React from 'react';
import { graphql } from 'gatsby';
import { mapEdgesToNodes } from '../lib/helpers';
import styled from 'styled-components';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import FamilyList from '../components/family-list';
import Layout from '../containers/layout';
import { imageUrlFor } from '../lib/image-url';
import { Link } from 'gatsby';
import { random } from 'lodash';
export const query = graphql`
  query GalleryPageQuery {
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
    photoEntries: allSanityPhotoEntry {
      nodes {
        id
        _rawDescription
        slug {
          current
        }
        title
        photos {
          ...SanityGalleryImageFragment
        }
      }
    }
  }
`;

const GalleryPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const galleryNodes = data && data.photoEntries.nodes;
  const siteSettings = data.site;
  // const { familyCoverPhoto } = siteSettings;
  // const
  // console.log({ siteSettings, galleryNodes, data });
  const randomGalleryIndex = random(0, galleryNodes.length - 1);
  const coverPhotoIndex = random(0, galleryNodes[randomGalleryIndex].photos.length - 1);
  const coverPhoto = galleryNodes[randomGalleryIndex].photos[coverPhotoIndex];
  return (
    <PageContainer>
      <Layout>
        <SEO title="Photo Galleries" />
        <Container coverPhoto={coverPhoto}>
          <div className="photo-gallery-content">
            <H1>Photo Galleries</H1>
            <ul>
              {galleryNodes &&
                galleryNodes.length > 0 &&
                galleryNodes.map(gallery => (
                  <li className="coverPhoto" key={gallery.id}>
                    <Link to={`/gallery/${gallery.slug.current}`}>
                      <img src={gallery.photos[0].asset.url} className="" alt="" />
                      <div className="gallery-title">{gallery.title}</div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </Container>
      </Layout>
    </PageContainer>
  );
};

export default GalleryPage;

const PageContainer = styled.div`
  .photo-gallery-content {
    padding: 1rem;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-gap: 1rem;
    }
    .coverPhoto {
      position: relative;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      max-height: 300px;
      transition: 200ms ease-in;

      &:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .gallery-title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #000000ab;
        color: white;
        font-size: 3.4vw;
        text-align: center;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;

        @media (min-width: 905px) {
          font-size: 1.5rem;
        }
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
