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
      description: 'The website tagline. This will appear under the title on the home page.'
    },
    {
      name: 'headerImages',
      title: 'Header Images',
      description:
        'The background images for the homepage. These will be cycled through every few seconds.',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'familyCoverPhoto',
      title: 'Family Page Cover Photo',
      description: 'The cover photo for the family page.',
      type: 'image'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your site. This is useful for SEO',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      title: 'Social Media Links',
      description: 'Put links to your social media profiles here. They will appear in the footer.',
      of: [{ type: 'string' }],
      options: {
        layout: 'list'
      }
    }
  ]
};
