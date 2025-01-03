import Link from 'next/link';
import Image from 'next/image';

export default function BlogArticle({ article }) {

  return (
    <>
      <div key={article.id}>
        <div><Image src="" alt="Blog Cover" /></div>
        <div>
          <h2>{article.properties.Name.title[0].plain_text}</h2>
          <hr />
          <p>Published Date: {article.last_edited_time} </p><br />
          <p>Tags:</p>
          
          <p>{article.properties.Authors.people[0].name}</p>
          <hr />
          <p>{article.properties.Description.rich_text[0].text.content}</p>
        </div>
        <div>
          <Link href="/blog/[id]" as={`/blog/${article.id}`} >Read more</Link>
        </div>
      </div>
    </>
  );
}