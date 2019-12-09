import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import { buildImageObj } from '../lib/helpers';
import { imageUrlFor } from '../lib/image-url';
import PortableText from './portableText';
import Container from './container';
import AuthorList from './author-list';

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props;
  return (
    <Container>
      <article className={'root'}>
        {mainImage && mainImage.asset && (
          <div className={'mainImage'}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .auto('format')
                .url()}
              alt={'alt'}
            />
          </div>
        )}
        <div className={'grid'}>
          <div className={'mainContent'}>
            <h1 className={'title'}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className={'metaContent'}>
            {publishedAt && (
              <div className={'publishedAt'}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {authors && <AuthorList items={authors} title="Authors" />}
            {categories && (
              <div className={'categories'}>
                <h3 className={'categoriesHeadline'}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </article>
    </Container>
  );
}

export default BlogPost;
