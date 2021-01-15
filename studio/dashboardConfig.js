export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'github-actions',
            options: {
              title: 'Deploy Live Site',
              sites: [
                {
                  title: 'tsukimoon.net',
                  githubRepo: 'tsukimoon-website',
                  githubRepoOwner: 'instantrahmen',
                  githubToken: 'f1dd835edb486d1f5702bb72e9597026e1a88d20',
                  eventType: 'build-and-deploy',
                  url: 'https://www.tsukimoon.net'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/instantrahmen/tsukimoon-website',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://tsukimoon.net', category: 'apps' },
          { title: 'Admin Panel', value: 'https://admin.tsukimoon.net', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      // options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
};
