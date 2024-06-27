import { getDatabase } from '../lib/notion';
import { subscribe } from '../lib/actions';
import BlogArticle from './components/blogArticle';
import Carousel from './components/carousel';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div>
        <h1>Cloud Cybersecurity</h1><br />
        <p></p>
        <Link><a>Read more</a></Link>
      </div>
      
      <div className="TrendingPosts">
        <Carousel />
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