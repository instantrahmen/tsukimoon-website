import React, { useState } from 'react';
import PortableText from './portableText';
import Figure from '../components/Figure';
import styled from 'styled-components';
import { format } from 'date-fns';
import SlideshowModal from '../components/slideshow-modal';

const PhotoGallery = ({ photoEntry }) => {
  const { title, _rawDescription, photos, publishedAt } = photoEntry;
  const formattedDate = format(publishedAt, 'MMMM DD, YYYY');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openPhoto = photoIndex => {
    setCurrentSlide(photoIndex);
    setModalOpen(true);
  };

  return (
    <>
      <PhotoGalleryContainer>
        <div className="header">
          {publishedAt && (
            <div className="date-container">
              <span className="date">{formattedDate}</span>
            </div>
          )}
          <h2>{title}</h2>

          <article className="description">
            {_rawDescription && <PortableText blocks={_rawDescription} />}
          </article>
        </div>

        <ul className="photo-grid">
          {photos.map((photo, index) => (
            <button onClick={() => openPhoto(index)} key={photo.asset._id}>
              <Figure maxWidth={1920 / 4} node={photo} noCaption className="img-container" />
            </button>
          ))}
        </ul>
      </PhotoGalleryContainer>
      <SlideshowModal
        slides={photos}
        currentSlide={currentSlide}
        setSlide={setCurrentSlide}
        open={modalOpen}
        setOpen={setModalOpen}
      ></SlideshowModal>
    </>
  );
};

export default PhotoGallery;

const PhotoGalleryContainer = styled.div`
  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;

    &:focus {
      outline: none;
      box-shadow: 0px 0px 3px 3px #15ff6d;
    }
  }
  .header {
    h2 {
      font-size: 2.5rem;
      text-align: center;
      margin: 0;
      padding: 0;
    }

    .date-container {
      border-radius: 1rem;
      text-align: center;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      text-align: center;
      margin-top: -2.5rem;
      box-sizing: border-box;

      * {
        background: #efefef;
        padding: 1rem;
        box-sizing: border-box;
      }
    }

    border: 1px solid #23ac78;
    border-left: 3px solid #23ac78;
    border-right: 3px solid #23ac78;
    border-radius: 1rem;
    max-width: 600px;
    margin: 0 auto 1rem auto;
    padding: 1rem;
    box-sizing: border-box;
  }

  .photo-grid {
    list-style: none;
    display: grid;
    padding: 0;
    margin: 0;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
    * {
      margin: 0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: 200ms ease-in;
      height: 200px;

      img,
      figure,
      picture,
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
    }
  }
`;
