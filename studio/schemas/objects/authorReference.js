export default {
  name: 'authorReference',
  type: 'object',
  title: 'Family member reference',
  fields: [
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'familyMember'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'author.image.asset'
    }
  }
};
