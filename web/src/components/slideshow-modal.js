import React, { useEffect } from 'react';
import styled from 'styled-components';
import { wrap } from '@popmotion/popcorn';

import PortableText from './portableText';
import Figure from './Figure';

const SlideshowModal = ({ open = false, setOpen, slides = [], currentSlide = 0, setSlide }) => {
  const nextSlide = (direction = 1) => {
    setSlide(cur => {
      const newSlide = cur + direction;
      const newSlideWrapped = wrap(0, slides.length, newSlide);
      console.log({ currentSlide: cur, newSlideWrapped, newSlide });

      return newSlideWrapped;
    });
  };

  useEffect(() => {
    const keypressListener = window.addEventListener('keyup', e => {
      console.log({ keypress: e.key });

      if (e.key == 'Escape') {
        setOpen(false);
      }
      if (e.key == 'ArrowRight') {
        nextSlide(1);
      }
      if (e.key == 'ArrowLeft') {
        nextSlide(-1);
      }
    });
    return () => {
      window.removeEventListener('keypress', keypressListener);
    };
  }, []);

  return (
    <SlideshowContainer>
      {open && (
        <div className="overlay">
          <button className="close-button" onClick={() => setOpen(false)}>
            &times;
          </button>
          <div className="modal-content">
            <button className="control prev" onClick={() => nextSlide(-1)}>
              {'<'}
            </button>

            <div className="image">
              <div className="info">
                {currentSlide + 1} / {slides.length}
              </div>
              <Figure
                maxWidth={1920}
                node={slides[currentSlide]}
                noCaption
                className="img-container"
              />
            </div>
            <button className="control next" onClick={() => nextSlide(1)}>
              {'>'}
            </button>
          </div>
        </div>
      )}
    </SlideshowContainer>
  );
};

export default SlideshowModal;
const SlideshowContainer = styled.div`
  button {
    background: none;
    color: white;
    font-size: 3rem;
    border: none;
    cursor: pointer;
    font-family: sans-serif;
    font-weight: 100;
    &.close-button {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }

    &.control {
      height: 100%;

      &.prev {
        padding-right: 1.5rem;
      }
      &.next {
        padding-left: 1.5rem;
      }
    }

    &:focus {
      outline: none;
      color: #15ff6d;
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background: #000000ab;
    z-index: 100;
  }

  .modal-content {
    background: #050505;
    border: 1px solid #444;
    color: #dedede;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
    width: 80vw;
    max-width: 100%;
    position: relative;
    height: 75vh;
    z-index: 110;

    .image {
      flex: 1;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      position: relative;

      .info {
        background: #111c;
        border: 1px solid #565656;
        color: white;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        position: absolute;
        right: 0;
        top: 1rem;
        z-index: 111;
      }
      figure,
      picture,
      img,
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        object-fit: contain !important;
      }
    }
  }
`;
