import React, { useLayoutEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TwitchIcon from 'react-icons/lib/fa/twitch';
import { darken } from 'polished';

const TWITCH_CLIENT_ID = 'q0y3x6qxa9ybr6yabgcwxk7iturpi4';

const getTsukiStreamInfo = async () => {
  try {
    const { data } = await axios({
      method: 'GET',
      headers: { 'Client-ID': TWITCH_CLIENT_ID },
      url: 'https://api.twitch.tv/helix/streams?user_login=tsukimoonvr'
    });
    console.log({ TSUKI_STREAM_DATA: data });
    return res.data[0];
  } catch (e) {
    console.log('failed to fetch user');
    console.log(e);
    return null;
  }
};
const TwitchLiveIndicator = ({ className }) => {
  const [live, setLive] = useState(false);

  useLayoutEffect(() => {
    getTsukiStreamInfo().then(data => {
      setLive(!!data);
    });
  }, []);

  return (
    <div className={className}>
      {live && (
        <a href="https://twitch.tv/tsukimoonvr" target="__blank">
          <TwitchIcon /> Live now!
        </a>
      )}
    </div>
  );
};

export default styled(TwitchLiveIndicator)`
  position: fixed;
  top: 0;
  right: 0;
  a {
    background: #68bd5eaa;
    padding: 0.3rem;
    font-size: 0.7rem;
    border-radius: 3px;
    color: #fff !important;

    &:hover {
      background: ${darken(0.2, '#68bd5e')};
    }
  }
`;
