import React from 'react';
import styled from 'styled-components';
import Figure from './Figure';
import PortableText from './portableText';
import SocialMediaLink from './social-media-link';

const FamilyMemberProfile = ({ className, familyMember }) => {
  return (
    <div className={className}>
      <div className="avatar">
        <Figure maxWidth={200} node={familyMember.image} />
      </div>
      <div className="member-profile">
        <div className="panel bio-panel">
          {familyMember._rawLongBio && <PortableText blocks={familyMember._rawLongBio} />}
        </div>
        <div className="panel info-panel">
          <h3 className="sidebar-title">Where to find {familyMember.name}</h3>
          <ul class="social-media-links">
            {familyMember.socialMediaLinks.map(link => (
              <li>
                <SocialMediaLink url={link} includeName />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default styled(FamilyMemberProfile)`
  .avatar {
    width: 150px;
    height: 150px;
    overflow: hidden;
    background: ${({ familyMember }) => familyMember.color.hex};

    position: relative;
    box-sizing: border-box;
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border: 4px solid ${({ familyMember }) => familyMember.color.hex};
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
    grid-template-columns: 3fr 1fr;
    grid-gap: 1rem;
    margin-top: -3rem;
    box-sizing: border-box;
    .panel {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      padding: 3rem 2rem;
      box-sizing: border-box;
      background: #fafafa;
    }
  }

  .social-media-links {
    margin: 0;
    padding: 0;

    li {
      display: block;
    }

    a {
      text-decoration: none;
      color: #333;
      font-size: 1.4rem;
      &:hover {
        color: ${({ familyMember }) => familyMember.color.hex};
      }
    }
  }
`;
