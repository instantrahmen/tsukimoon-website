import React from 'react';
import clientConfig from '../../client-config';
import BasePortableText from '@sanity/block-content-to-react';
import serializers from './serializers';

const PortableText = ({ blocks }) => (
  <BasePortableText
    imageOptions={{ w: 1201, h: 676, fit: 'max' }}
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
);

export default PortableText;
