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
    },
    {
      name: 'sortIndex',
      type: 'number',
      description:
        'The lower the number, the higher in the list it will show. Must be greater than zero. Leave blank to just use default sorting'
      // validation: Rule => Rule.positive().interger()
    }
  ],
  orderings: [
    {
      title: 'Sort Index Ascending',
      name: 'sortIndexAsc',
      by: [{ field: 'sortIndex', direction: 'asc' }]
    },
    {
      title: 'Sort Index Descending',
      name: 'sortIndexDesc',
      by: [{ field: 'sortIndex', direction: 'desc' }]
    },
    {
      title: 'Name - Descending',
      name: 'nameDesc',
      by: [{ field: 'name', direction: 'desc' }]
    },
    {
      title: 'Name - Ascending',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }]
    }
  ],

  preview: {
    select: {
      title: 'name',
      yarn: 'bio',
      media: 'image'
    }
  }
};
