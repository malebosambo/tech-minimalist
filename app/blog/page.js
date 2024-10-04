import { getDatabase } from '../../lib/notion';
import BlogArticle from '../components/blogArticle';

export default async function Blog() {
  
  const articles = await getDatabase();

  return (
    <main className="BlogList">
      <div><h1>Blog Articles</h1></div>
      <hr />
      <div></div>
      <div></div>
    </main>
  );  
}