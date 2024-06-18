import { getDatabase } from '../lib/notion';
import BlogArticle from './components/blogArticle';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home({ articles }) {
  
  return (
    <main className={styles.main}>
      <div>
      
      </div>
      <div>{articles.map((article) => {
        <BlogArticle article={article} />
      })}</div>
      <div className="Newsletter">
        <form method="POST" action="() => {}" >
          <input name="fullname" type="text" />
          <input name="email" type="email" />
          <button>Subscribe</button>
        </form>
      </div>
      
      
    </main>
  );
}

export async function getStaticProps() {
  const articles = await getDatabase();
  
  return {
    props: {
      articles
    }
  }
}