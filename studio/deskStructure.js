import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdPerson from 'react-icons/lib/md/person';
import MdFavorite from 'react-icons/lib/md/favorite';
import StaticPageIcon from 'react-icons/lib/md/format-align-left';
import MdCamera from 'react-icons/lib/md/photo-camera';

const hiddenDocTypes = listItem =>
  ![
    'category',
    'author',
    'post',
    'siteSettings',
    'familyMember',
    'staticPage',
    'photoEntry'
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Static Pages')
        .icon(StaticPageIcon)
        .schemaType('staticPage')
        .child(S.documentTypeList('staticPage').title('Static Pages')),
      S.listItem()
        .title('Family Members')
        .icon(MdFavorite)
        .schemaType('familyMember')
        .child(S.documentTypeList('familyMember').title('Family Members')),
      S.listItem()
        .title('Photo Entries')
        .icon(MdCamera)
        .schemaType('photoEntry')
        .child(S.documentTypeList('photoEntry').title('Photo Entries')),
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      // S.listItem()
      //   .title('Blog posts')
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Blog posts')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
