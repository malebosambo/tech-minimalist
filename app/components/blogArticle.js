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
          <p>Tags:</p>
          <ul>{article.properties.Tags.select.map((tag) => <li>{name}</li>)}</ul>
          <p>{article.properties.Author.people[0].name}</p>
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