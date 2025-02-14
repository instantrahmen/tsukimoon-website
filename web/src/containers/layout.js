import { graphql, StaticQuery } from 'gatsby';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      headerImages {
        ...SanityImageFragment
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

  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          );
        }

        const nextHeaderImage = (amount = 1) => {
          if (amount < 0) {
            return setCurrentHeaderImage(data.site.headerImages.length - 1);
          }

          setCurrentHeaderImage(prevImage => {
            const newImage = prevImage + amount;
            if (data.site.headerImages[newImage] === undefined) {
              return 0;
            } else {
              return newImage;
            }
          });
        };

        useEffect(() => {
          if (!window) return;
          const headerInterval = setInterval(() => {
            nextHeaderImage(1);
          }, 5000);

          return () => {
            clearInterval(headerInterval);
          };
        }, []);

        return (
          <Layout
            {...props}
            showNav={showNav}
            siteTitle={data.site.title}
            siteHeaderImages={data.site.headerImages}
            nextHeaderImage={nextHeaderImage}
            currentHeaderImage={currentHeaderImage}
            setCurrentHeaderImage={setCurrentHeaderImage}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        );
      }}
    />
  );
}

export default LayoutContainer;
