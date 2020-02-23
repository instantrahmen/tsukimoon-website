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
            name: 'netlify',
            options: {
              description:
                'NOTE: Because this site is static, it needs to be re-deployed to see the changes when anything is published. To deploy, just click the "Deploy" button below whenever you make changes. Also you are a cutie! 💙',
              sites: [
                {
                  buildHookId: '5de4834034b0fddef2cc9b2d',
                  title: 'tsukimoon.net',
                  name: 'tsukimoon-website',
                  apiId: '3d897f26-88f6-458a-a282-d40e929e6b2f'
                }
                // {
                //   buildHookId: '5de4834063eafd14dcc632e3',
                //   title: 'Sanity Studio',
                //   name: 'tsukimoon-website-studio',
                //   apiId: '9197e972-7092-41ae-aff1-254206051369'
                // }
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
