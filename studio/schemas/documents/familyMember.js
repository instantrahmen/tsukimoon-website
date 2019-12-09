export default {
  name: 'familyMember',
  type: 'document',
  title: 'Family Member',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'color',
      type: 'color',
      title: 'Favorite Color'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography'
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      title: 'Social Media Links',
      description: 'Where can this person be reached?',
      of: [{ type: 'string' }],
      options: {
        layout: 'list'
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
};
