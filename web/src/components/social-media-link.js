import React from 'react';
import styled from 'styled-components';
import {
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaFacebook,
  FaDeviantart,
  FaExternalLinkSquareAlt
} from 'react-icons/fa';

const SocialMediaLink = ({ url, includeName = false, includeIcon = true, ...props }) => {
  const finalUrl = url.startsWith('http') ? url : `https://${url}`;
  const websiteName = extractWebsiteName(finalUrl);
  return (
    <a href={finalUrl} className="social-media-link" {...props}>
      {includeIcon && <SocialMediaIcon className="website-icon" websiteName={websiteName} />}{' '}
      {includeName && <span className="website-name">{websiteName}</span>}
    </a>
  );
};

export const extractWebsiteName = url => {
  if (url.includes('twitter.com')) return 'twitter';
  if (url.includes('facebook.com')) return 'facebook';
  if (url.includes('github.com')) return 'github';
  if (url.includes('youtube.com')) return 'youtube';
  if (url.includes('twitch.tv')) return 'twitch';
  if (url.includes('deviantart.com')) return 'deviantart';
  if (url.includes('vtubie.com')) return 'vtubie';

  return url;
};

export const SocialMediaIcon = ({ websiteName, ...props }) => {
  if (websiteName === 'twitter') return <FaTwitter {...props} />;
  if (websiteName === 'facebook') return <FaFacebook {...props} />;
  if (websiteName === 'twitch') return <FaTwitch {...props} />;
  if (websiteName === 'youtube') return <FaYoutube {...props} />;
  if (websiteName === 'github') return <FaGithub {...props} />;
  if (websiteName === 'deviantart') return <FaDeviantart {...props} />;
  return <FaExternalLinkSquareAlt {...props} />;
};

export default styled(SocialMediaLink)`
  .website-name {
    text-transform: capitalize;
    /* padding-left: 1rem; */
  }

  .social-media-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
`;
