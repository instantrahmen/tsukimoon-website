export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      type: 'text',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Tags for easy sorting',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        isHighlighted: true,
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
};
