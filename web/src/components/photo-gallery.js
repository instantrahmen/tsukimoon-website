import React, { useState } from 'react';
import PortableText from './portableText';
import Figure from '../components/Figure';
import styled from 'styled-components';
import { format } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { random } from 'lodash';
import { snap } from '@popmotion/popcorn';
import SlideshowModal from '../components/slideshow-modal';

const snapToDirection = snap([-1, 1]);
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  // hidden: index => ({ opacity: 0, y: -1000, x: 1000 * (index % 2 === 0 ? -1 : 1) }),
  hidden: { opacity: 0 },

  show: {
    opacity: 1
  }
};

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
        <AnimatePresence>
          <motion.ul
            className="photo-grid"
            variants={container}
            initial={'hidden'}
            animate={'show'}
          >
            {photos.map((photo, index) => (
              <motion.li
                variants={item}
                onClick={() => openPhoto(index)}
                key={photo.asset._id}
                custom={index}
                className="gallery-photo"
              >
                <Figure maxWidth={1920 / 4} node={photo} noCaption className="img-container" />
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
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
  .gallery-photo {
    margin: 0;
    padding: 0;
    border: none;

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

    & > * {
      will-change: transform;
    }
    * {
      margin: 0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: 200ms ease-in;
      height: 200px;
      background: black;

      img,
      figure,
      picture,
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.95;

        &:hover {
          opacity: 1;
        }
      }
      &:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
    }
  }
`;
