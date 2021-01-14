import React, { useState } from 'react';
import styled from 'styled-components';
import Figure from './Figure';
import PortableText from './portableText';
import SocialMediaLink from './social-media-link';
import { darken, readableColor, meetsContrastGuidelines } from 'polished';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import SlideshowModal from '../components/slideshow-modal';

const getReadableColor = (originalColor, backgroundColor = '#fff') => {
  // hmmm... these are both the same? Gotta look into that later.
  const darkerColor = darken(0.1, originalColor);
  const evenDarkerColor = darken(0.1, originalColor);

  if (originalColor === '#fff' || originalColor === '#ffffff') return 'black  ';
  if (meetsContrastGuidelines(backgroundColor, originalColor).AAA) return originalColor;

  if (meetsContrastGuidelines(backgroundColor, darkerColor).AAA) return darkerColor;

  return evenDarkerColor;
};

const FamilyMemberProfile = ({ className, familyMember }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openPhoto = photoIndex => {
    setCurrentSlide(photoIndex);
    setModalOpen(true);
  };

  return (
    <>
      <div className={className}>
        <div className="avatar">
          {/* <Figure maxWidth={200} node={familyMember.image} /> */}
          <img
            src={imageUrlFor(buildImageObj(familyMember.image))
              .width(200)
              .height(200)
              .fit('crop')
              .url()}
            alt=""
          />
        </div>
        <div className="member-profile">
          <div className="panel bio-panel">
            {familyMember._rawLongBio && <PortableText blocks={familyMember._rawLongBio} />}
          </div>
          <div className="panel info-panel">
            <div className="sidebar-item">
              <h3 className="sidebar-title">Where to find {familyMember.name}</h3>
              <ul className="social-media-links">
                {familyMember.socialMediaLinks.map((link, index) => (
                  <li key={`${index}-${JSON.stringify(link)}`}>
                    <SocialMediaLink url={link} includeName />
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-item">
              <h3 className="sidebar-title">Featured Photos</h3>
              <ul className="featured-photos">
                {familyMember.featuredPhotos &&
                  familyMember.featuredPhotos.map((photo, i) => (
                    <li role="button" onClick={() => openPhoto(i)} key={JSON.stringify(photo)}>
                      <Figure node={photo} maxWidth={200} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SlideshowModal
        slides={familyMember.featuredPhotos}
        currentSlide={currentSlide}
        setSlide={setCurrentSlide}
        open={modalOpen}
        setOpen={setModalOpen}
      ></SlideshowModal>
    </>
  );
};

export default styled(FamilyMemberProfile)`
  h3 {
    color: ${({ familyMember }) => getReadableColor(familyMember.color.hex)};
    /* -webkit-text-fill-color: transparent; */

    text-align: center;
    padding: 0;
  }

  .sidebar-item {
    border-bottom: 2px solid ${({ familyMember }) => getReadableColor(familyMember.color.hex)};
    border-top: 2px solid ${({ familyMember }) => getReadableColor(familyMember.color.hex)};
    border-radius: 20px;
    margin-bottom: 2rem;
    padding: 1rem .5rem 2rem .5rem;

    h1, h2, h3, h4 {
      padding-top: 0;
    }
  }

  .avatar {
    width: 150px;
    height: 150px;
    overflow: hidden;
    background: ${({ familyMember }) => getReadableColor(familyMember.color.hex)};

    position: relative;
    box-sizing: border-box;
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border: 2px solid ${({ familyMember }) => familyMember.color.hex};
    margin-top: -100px;
    z-index: 10;

    figure {
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        position: absolute !important;
        top: 0;
        left: 0;
      }
    }

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  .member-profile {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-gap: 1rem;
    margin-top: -3rem;
    box-sizing: border-box;

    .panel {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      padding: 3rem 2rem;
      box-sizing: border-box;
      background: #fafafa;
      /* border: 2px solid ${({ familyMember }) => familyMember.color.hex}; */
    }

    .info-panel {
      width: 300px;
      max-width: 100vw;
      padding: 3rem 1rem;
      text-align: center;
    }

    @media (max-width: 904px) {
      grid-template-columns: 1fr;

      .info-panel {
        width: 100%;
        grid-row-start: 1;
        grid-row-end: 2;
      }
    }
  }

  .social-media-links {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    position: relative;

    li {
      display: block;
      width: 100%;
    }

    a {
      text-decoration: none;
      color: #333;
      font-size: 1.4rem;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      transition: 100ms ease-in;

      &:hover {
        color: ${({ familyMember }) => getReadableColor(familyMember.color.hex)};
        background: #ececec;

      }
    }
  }

  ul.featured-photos {
    display: grid;
    margin: 0;
    padding: 0;
    list-style: none;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    & > li {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 80px;
      position: relative;
      background: black;
      
    }

    figure, img, .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      opacity: 0.95;
      transition: 100ms ease-in;
      &:hover {
        opacity: 1;
        margin: 0
      }
    }

    img {
      object-fit: cover;

    }

    /* img,
    figure,  .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    } */
  }
`;
