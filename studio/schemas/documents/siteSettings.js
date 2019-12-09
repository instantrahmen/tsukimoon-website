export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'What is the name of your website?'
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
      description: 'The website tagline. This will appear under the title on the home page'
    },
    {
      name: 'headerImages',
      title: 'Header Images',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{ type: 'author' }]
    }
  ]
};
