export default {
  name: 'staticPage',
  type: 'document',
  title: 'Static Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title for the page'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Where do you want this to appear on the page?',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Page Content'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', slug = {}, media }) {
      const path = `/${slug.current}/`;
      return {
        title,
        media,
        subtitle: path
      };
    }
  }
};
