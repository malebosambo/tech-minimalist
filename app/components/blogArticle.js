'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function BlogArticle({ article }) {
  
  return (
    <>
      <div key={article.id}>
        <div><Image src={} alt="Blog Cover" /></div>
        <div>
          <h2>{article.title}</h2>
          <hr />
          <p>Published Date: {article.date} </p><br />
          <p>Tags: {article.tags}</p>
          <hr />
          <p>{article.description}</p>
        </div>  
      </div>
    </>
  );
}