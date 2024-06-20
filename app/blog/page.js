import { getDatabase } from '../../lib/notion';
import BlogArticle from '../components/blogArticle';

export default function Blog({ articles }) {
  
  return (
    <main>
      <div><h1>Blog Articles</h1></div>
      <hr />
      <div>{articles.map((article) => {
        <BlogArticle article={article} />
      })}</div>
    </main>
  );  
}

export async function getServerSideProps() {
  const articles = await getDatabase();
  
  return {
    props: {
      articles
    }
  }
}