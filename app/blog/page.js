import { getDatabase } from '../../lib/notion';
import BlogArticle from '../components/blogArticle';

export default function Blog() {
  
  const articles = getDatabase();

  return (
    <main className="BlogList">
      <div><h1>Blog Articles</h1></div>
      <hr />
      <div></div>
      <div>{articles.results.map((article) => {
        <BlogArticle article={article} />
      })}</div>
    </main>
  );  
}