import React from 'react';
import GithubIcon from 'react-icons/lib/fa/github';
import FacebookIcon from 'react-icons/lib/fa/facebook-official';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import TwitchIcon from 'react-icons/lib/fa/twitch';
import YoutubeIcon from 'react-icons/lib/fa/youtube';
import DAIcon from 'react-icons/lib/fa/deviantart';
import LinkIcon from 'react-icons/lib/fa/external-link-square';

const SocialMediaLink = ({ url, ...props }) => {
  return (
    <a href={url} {...props}>
      <SocialMediaIcon websiteName={extractWebsiteName(url)} />
    </a>
  );
};

export const extractWebsiteName = url => {
  if (url.includes('twitter.com')) return 'twitter';
  if (url.includes('facebook.com')) return 'facebook';
  if (url.includes('github.com')) return 'github';
  if (url.includes('youtube.com')) return 'youtube';
  if (url.includes('twitch.tv')) return 'twitch';
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
export default SocialMediaLink;
