export default {
  name: 'authorReference',
  type: 'object',
  title: 'Family member reference',
  fields: [
    {
      name: 'familyMember',
      type: 'reference',
      to: [
        {
          type: 'familyMember',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'familyMember.name',
      media: 'familyMember.image.asset',
    },
  },
};
