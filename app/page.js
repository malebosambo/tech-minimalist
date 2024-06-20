import { getDatabase } from '../lib/notion';
import { subscribe } from '../lib/actions';
import BlogArticle from './components/blogArticle';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home({ articles }) {
  
  return (
    <main className={styles.main}>
      <div>
      
      </div>
      <div className="TrendingPosts">
        
      </div>
      <div className="Newsletter">
        <form action={subscribe} >
          <input name="fullname" type="text" />
          <input name="email" type="email" />
          <button>Subscribe</button>
        </form>
      </div>
       <div>{articles.map((article) => {
        <BlogArticle article={article} />
      })}</div>
      <div className="Authors">
        <h1>Know your author</h1>
        <div>
          <Image src="" alt="Authors Avatar" />
          <h3>Malebo Sambo</h3>
        </div>
      </div>
      
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