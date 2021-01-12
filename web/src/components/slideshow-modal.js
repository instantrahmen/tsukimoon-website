import React, { useEffect } from 'react';
import styled from 'styled-components';
import { wrap } from '@popmotion/popcorn';
// import ArrowLeft from 'react-icons/lib/fa/arrow-left';
// import ArrowRight from 'react-icons/lib/fa/arrow-right';
import { AiFillCaretLeft as ArrowLeft, AiFillCaretRight as ArrowRight } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

import PortableText from './portableText';
import Figure from './Figure';
import Carousel from './carousel';

const SlideshowModal = ({ open = false, setOpen, slides = [], currentSlide = 0, setSlide }) => {
  const nextSlide = (direction = 1) => {
    setSlide(cur => {
      const newSlide = cur + direction;
      const newSlideWrapped = wrap(0, slides.length, newSlide);
      console.log({ currentSlide: cur, newSlideWrapped, newSlide });

      return newSlideWrapped;
    });
  };
  console.log({ slides });

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

  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 200
  };

  return (
    <AnimatePresence>
      {open && (
        <SlideshowContainer>
          <motion.div
            initial={{ top: 1000 }}
            animate={{ top: 0 }}
            exit={{ top: 1000 }}
            transition={spring}
            className="overlay"
          >
            <button className="close-button" onClick={() => setOpen(false)}>
              &times;
            </button>

            <div className="modal-content">
              <button className="control prev" onClick={() => nextSlide(-1)}>
                <ArrowLeft></ArrowLeft>
              </button>

              <div className="image">
                <div className="info">
                  {currentSlide + 1} / {slides.length}
                </div>

                <Figure
                  maxWidth={1920}
                  node={slides[currentSlide]}
                  // noCaption
                  className="img-container"
                  initial={{ left: 1000 }}
                  animate={{ left: 0 }}
                  exit={{ left: -1000 }}
                />
              </div>
              <button className="control next" onClick={() => nextSlide(1)}>
                <ArrowRight></ArrowRight>
              </button>
            </div>
          </motion.div>
        </SlideshowContainer>
      )}
    </AnimatePresence>
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

    &:after {
      content: ' ';
      height: 30vh;
      background: #000000ab;

      position: absolute;
      bottom: -30vh;
      left: 0;
      width: 100vw;
    }
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

      .caption {
        position: absolute;
        bottom: 1rem;
        z-index: 115;
        left: 50%;

        border: 1px solid #23ac78;
        border-left: 3px solid #23ac78;
        border-right: 3px solid #23ac78;
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
      figure,
      picture,
      img,
      .gatsby-image-wrapper {
        width: 100%;
        max-height: 100%;
        margin: 0;
        padding: 0;
        object-fit: contain !important;
        image-rendering: pixelated;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        flex: 1;
      }
    }
  }
`;
