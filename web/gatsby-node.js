const { isFuture } = require('date-fns');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require('date-fns');

const createStaticPages = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityStaticPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  reporter.info(`Creating static pages`);
  reporter.info(`---------------------`);

  if (result.errors) throw result.errors;

  reporter.info(`No errors in GraphQL`);

  const postEdges = (result.data.allSanityStaticPage || {}).edges || [];

  reporter.info(`Found ${postEdges.length} static pages`);

  postEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    const path = `/${slug.current}/`;

    reporter.info(`Creating static page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/static-page.js'),
      context: { id }
    });
  });
  reporter.info(`---------------------`);
};

const createFamilyMemberPages = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityFamilyMember(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  reporter.info(`Creating family member pages`);
  reporter.info(`---------------------`);

  if (result.errors) throw result.errors;

  reporter.info(`No errors in GraphQL`);

  const familyMemberEdges = (result.data.allSanityFamilyMember || {}).edges || [];

  reporter.info(`Found ${familyMemberEdges.length} family members`);

  familyMemberEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    const path = `/family/${slug.current}/`;

    reporter.info(`Creating family member: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/family-member-page.js'),
      context: { id }
    });
  });
  reporter.info(`---------------------`);
};

const createPhotoEntryPages = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const result = await graphql(`
    query AllPhotoEntries {
      allSanityPhotoEntry(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  reporter.info(`Creating photo entry pages`);
  reporter.info(`---------------------`);

  if (result.errors) throw result.errors;

  reporter.info(`No errors in GraphQL`);

  const photoEntryEdges = (result.data.allSanityPhotoEntry || {}).edges || [];

  reporter.info(`Found ${photoEntryEdges.length} photo entries`);

  photoEntryEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    const path = `/gallery/${slug.current}/`;

    reporter.info(`Creating photo entry: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/photo-gallery-page.js'),
      context: { id }
    });
  });
  reporter.info(`---------------------`);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createStaticPages(graphql, actions, reporter);
  await createFamilyMemberPages(graphql, actions, reporter);
  await createPhotoEntryPages(graphql, actions, reporter);
};
