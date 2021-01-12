import React from 'react';
import GithubIcon from 'react-icons/lib/fa/github';
import FacebookIcon from 'react-icons/lib/fa/facebook-official';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import TwitchIcon from 'react-icons/lib/fa/twitch';
import YoutubeIcon from 'react-icons/lib/fa/youtube';
import DAIcon from 'react-icons/lib/fa/deviantart';
import LinkIcon from 'react-icons/lib/fa/external-link-square';
import styled from 'styled-components';

const SocialMediaLink = ({ url, includeName = false, ...props }) => {
  const finalUrl = url.startsWith('http') ? url : `https://${url}`;
  const websiteName = extractWebsiteName(finalUrl);
  return (
    <a href={finalUrl} className="social-media-link" {...props}>
      <SocialMediaIcon className="website-icon" websiteName={websiteName} />{' '}
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
  if (websiteName === 'twitter') return <TwitterIcon {...props} />;
  if (websiteName === 'facebook') return <FacebookIcon {...props} />;
  if (websiteName === 'twitch') return <TwitchIcon {...props} />;
  if (websiteName === 'youtube') return <YoutubeIcon {...props} />;
  if (websiteName === 'github') return <GithubIcon {...props} />;
  if (websiteName === 'deviantart') return <DAIcon {...props} />;
  return <LinkIcon {...props} />;
};

export default styled(SocialMediaLink)`
  .website-name {
    text-transform: capitalize;
    padding-left: 1rem;
  }

  .social-media-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
`;
