import { getPage } from '../../lib/notion';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Article({ article }) {
  
  const router = useRouter();
  
  const postID = router.query.id;
  
  return (
    <main className="BlogArticle">
      <div><Image src={} alt="Coverphoto for the blog post" /></div>
      <div>
        <h1>{article.properties.Name.title[0].plain_text}</h1>
        <hr />
        <p>`Published Date: ${article.last_edited_time}`</p><span className="Whitespace"></span>
        <p>{article.properties.Tags.select.name}</p>
        <hr />
        <p></p>
      </div>
    </main>
  );
}