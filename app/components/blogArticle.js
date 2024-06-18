'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function BlogArticle({ article }) {

  return (
    <>
      <div key={article.id}>
        <div><Image src={} alt="Blog Cover" /></div>
        <div>
          <h2>{article.properties.Name.title[0].plain_text}</h2>
          <hr />
          <p>Published Date: {article.last_edited_time} </p><br />
          <p>Tags: {article.properties.Tags.name}</p>
          <hr />
          <p>{article.properties.Description.rich_text[0].plain_text}</p>
        </div>
        <div>
          <Link href="/blog/[id]" as={`/blog/${article.id}`} ><a>Read more</a></Link>
        </div>
      </div>
    </>
  );
}