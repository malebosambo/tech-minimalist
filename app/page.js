import { getDatabase } from '../lib/notion';
import { subscribe } from '../lib/actions';
import BlogArticle from './components/blogArticle';
import Newsletter from './components/newsletter';
import SocialLinks from './components/socialLinks';
import ArticleTags from './components/postArticleTags';
import Carousel from './components/carousel';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {

  const articles = await getDatabase();
  
  return (
    <main className={styles.home}>
      <div className="Latest_Post">
        <h1>Cloud Cybersecurity</h1><br />
        <p>The cloud and cloud-based workloads have become an increasing dominant player in the ICT industry and becoming a major preference for many businesses, organizations, governments and the ICT community. In addition to the increase in cloud adoption and migration, there has been a parallel increase in cybersecurity activities posing a great threat for cloud service providers, their partners and cloud customers in regards to their data, identities, finances and reputation.</p><br />
        <Link href="/blog/cloud-cybersecurity">Read more</Link>
      </div>
      
      <div className="Trending_Posts">
        <h1>Trending Posts</h1><br />
        <div>{articles.map((article) =>(<BlogArticle article={article} />))}</div>
      </div>
      
      <div className="Newsletter">
        <div><h2>Get our newsletter delivered to your inbox!</h2></div>
        <div><Newsletter subscribe={subscribe} /></div>
      </div>
      
       <div className="Posts_Gallery">
        <Carousel />
       </div>
      
      <div className="Authors">
        <h1>Know your author</h1><br />
        <div>
          <Image src="" alt="Authors Avatar" />
          <h3>Malebo Sambo</h3><br />
          <div className="Socials"><SocialLinks /></div>
        </div>
      </div>
      
      <div className="Join_Team">
        <h2>Invitation to join the team</h2>
        <p>We are inviting anyone from the ICT sector interested in writing or podcasting.</p>
        <Link href="./team/join">Join Team</Link>
      </div>
      
      <div className="Blog_Article_Tag_Filter">
        <ArticleTags />
      </div>
    </main>
  );
}