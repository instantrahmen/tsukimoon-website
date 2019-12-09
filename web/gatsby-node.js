const { isFuture } = require('date-fns');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require('date-fns');

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, 'YYYY/MM');
      const path = `/blog/${dateSegment}/${slug.current}/`;

      reporter.info(`Creating blog post page: ${path}`);

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: { id }
      });
    });
}

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

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createStaticPages(graphql, actions, reporter);
  await createBlogPostPages(graphql, actions, reporter);
};
