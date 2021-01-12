import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import styled from 'styled-components';

const variants = {
  enter: direction => ({
    opacity: 0,
    x: direction > 0 ? -1000 : 1000
  }),
  center: {
    zIndex: 1,
    opacity: 1,
    x: 0
  },
  exit: direction => ({
    zIndex: 0,
    opacity: 0,
    x: direction < 0 ? -1000 : 1000
  })
};

const Carousel = ({ slides, className, style, autoTurnTimer = 0, delay = 0 }) => {
  const [[page, direction], setPage] = useState([0, 1]);
  const [pauseAutoTurn, setPauseAutoTurn] = useState(false);

  const index = wrap(0, slides.length, page);

  const paginate = dir => {
    setPage(currentPage => [currentPage[0] + dir, dir]);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(Math.abs(offset) * velocity);
  };

  useEffect(() => {
    if (autoTurnTimer === 0) return;
    const timer = setInterval(() => {
      if (!pauseAutoTurn) {
        paginate(1);
      }
    }, autoTurnTimer);
    return () => {
      clearInterval(timer);
    };
  }, [pauseAutoTurn]);

  const CurrentComponent = () => slides[index];
  return (
    <>
      <div className={className} style={style}>
        <AnimatePresence custom={direction}>
          <motion.div
            layout
            key={page}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            custom={direction}
            transition={{
              delay: delay,
              x: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
                mass: 0.2
              },
              opacity: { duration: 0.2 }
            }}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              left: 0,
              top: 0
            }}
            exit={{ opacity: 0 }}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            onHoverStart={() => setPauseAutoTurn(true)}
            onHoverEnd={() => setPauseAutoTurn(false)}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x === 0) return;
              const direction = offset.x / Math.abs(offset.x);
              if (swipePower(offset.x, velocity.x) > swipeConfidenceThreshold) {
                paginate(direction);
              }
            }}
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Carousel;
