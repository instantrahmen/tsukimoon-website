import React from 'react';
import styled from 'styled-components';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import { Link } from 'gatsby';
import PortableText from './portableText';
import SocialMediaLink from './social-media-link';
import Figure from './Figure';
import { sortBy } from 'lodash';

const FamilyList = ({ items, siteSettings }) => {
  const sortedCuties = sortBy(items, 'sortIndex');
  return (
    <FamilyGrid>
      {sortedCuties.map(cutie => (
        <li className={'familyMember'} key={cutie.id}>
          <CutieHeader className="cutieHeader" color={rgba(cutie.color.rgb)}>
            <div className={'avatar'}>
              {cutie && cutie.image && cutie.image.asset && (
                <Figure noCaption maxWidth={100} node={cutie.image} />
              )}
            </div>
            {/* <pre>{JSON.stringify(cutie, null, 2)}</pre> */}
            <div className="name">
              <Link to="/family">{cutie.name}</Link>
            </div>
          </CutieHeader>
          <div className="card-body">
            <article className="bio">
              {cutie._rawBio && <PortableText blocks={cutie._rawBio} />}
            </article>
            <div className="socialMediaLinks">
              <span className="title">Links</span>
              <ul>
                {cutie.socialMediaLinks.map(url => (
                  <li key={`${cutie.id}/${url}`}>
                    <SocialMediaLink url={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </FamilyGrid>
  );
};

export default FamilyList;

const rgba = ({ r, g, b, a = 1 }) => `rgba(${r}, ${g}, ${b}, ${a})`;

const FamilyGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style: none;
  margin: 3rem auto;
  padding: 0;
  max-width: 1600px;
  grid-gap: 1rem;
  li.familyMember {
    background: #f3f3f3;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    text-align: center;
    /* padding: 1rem; */
    overflow: hidden;
    /* border-radius: 0.5rem; */
    box-sizing: border-box;
    z-index: 1;
    position: relative;
    max-height: 360px;
    display: flex;
    flex-direction: column;

    &:hover {
      background: #fcfcfc;
      z-index: 2;

      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .card-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      .bio {
        flex: 1;
      }
    }

    .socialMediaLinks {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 1rem;
      color: #666;

      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0;
      }

      li {
        margin: 0.5rem;
        a {
          color: #666;
        }
        a:hover {
          color: #15ff30;
        }
      }
    }
  }
`;

const CutieHeader = styled.div`
  background: ${({ color }) => color};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  .avatar {
    padding: 1rem;
  }
  .avatar figure {
    border-radius: 300px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 100px;
    height: 100px;
    margin: 0 auto;
    overflow: hidden;

    * {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 1rem;

    a {
      color: white;
      text-decoration: none;
    }
  }
`;
