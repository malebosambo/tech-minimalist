import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const router = useRouter();
  const paths = ["/", "/blog", "/podcast", "/team", "/resources", "/contacts"];
  const activeLink = "Nav-Link Selected";
  const inactiveLink = "Nav-Link";
 
  return (
    <>
      <Link href="/" className={ paths[0] == router.pathname ? activeLink : inactiveLink }>Home</Link>
      <Link href="/blog" className={ paths[1] == router.pathname ? "activeLink" : "inactiveLink" }>Blog</Link>
      <Link href="/podcast" className={ paths[2] == router.pathname ? "activeLink" : "inactiveLink" }>Podcast</Link>
      <Link href="/team" className={ paths[3] == router.pathname ? "activeLink" : "inactiveLink" }>Team</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/contacts" className={ paths[4] == router.pathname ? "activeLink" : "inactiveLink" }>Contacts</Link>
    </>
  );
}