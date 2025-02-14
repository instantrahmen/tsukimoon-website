// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
});

const clientConfig = require('./client-config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-favicon`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/about-tsuki/`, `/family/`, `/family/*`]
    //   }
    // }
  ]
};
