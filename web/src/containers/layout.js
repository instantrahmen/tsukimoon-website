import { graphql, StaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../components/layout';

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      headerImages {
        asset {
          url
        }
      }
    }
  }
`;

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false);
  const [currentHeaderImage, setCurrentHeaderImage] = useState(0);

  function handleShowNav() {
    setShowNav(true);
  }
  function handleHideNav() {
    setShowNav(false);
  }

  const nextHeaderImage = (amount = 1) => {
    if (typeof data.site.headerImages[currentHeaderImage + amount] !== 'undefined') {
      setCurrentHeaderImage(currentHeaderImage + amount);
    } else if (amount < 0) {
      setCurrentHeaderImage(data.site.headerImages.length - 1);
    } else {
      setCurrentHeaderImage(0);
    }
  };
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          );
        }
        return (
          <Layout
            {...props}
            showNav={showNav}
            siteTitle={data.site.title}
            siteHeaderImages={data.site.headerImages}
            nextHeaderImage
            currentHeaderImage
            setCurrentHeaderImage
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        );
      }}
    />
  );
}

export default LayoutContainer;
