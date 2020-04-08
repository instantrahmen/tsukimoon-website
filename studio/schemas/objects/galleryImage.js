export default {
  name: 'galleryImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'text',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'familyMembers',
      type: 'array',
      title: `Who's in this photo?`,
      of: [
        {
          type: 'authorReference',
        },
      ],
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Tags for easy sorting',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        isHighlighted: true,
        layout: 'tags',
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
};
