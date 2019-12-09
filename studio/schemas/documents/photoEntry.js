import { format } from 'date-fns';

export default {
  name: 'photoEntry',
  type: 'document',
  title: 'Photo Entry',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Photo entry title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Url slug for the photo entry',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Date',
      description: 'When were these photos taken?'
    },
    {
      name: 'photos',
      title: 'Photos',
      description:
        'If you have a lot to add, you can drag them from your file manager. Click on any photo to edit its caption',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            // {
            //   name: 'authors',
            //   title: 'Cuties in this photo',
            //   type: 'array',
            //   of: [
            //     {
            //       type: 'authorReference'
            //     }
            //   ]
            // },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true // <-- make this field easily accessible
              }
            }
          ]
        }
      ],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description',
      description: 'Use this field to describe the day if you want. Completely optional.'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM');
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      };
    }
  }
};
