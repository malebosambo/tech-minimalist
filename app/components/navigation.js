import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navigation() {
  const router = useRouter();
  const paths = ["/", "/blog", "/podcast", "/team", "/resources", "/contacts"];
  const activeLink = "Nav-Link Selected";
  const inactiveLink = "Nav-Link";
 
  return (
    <>
      <Link href="/"><a className={paths[0] == router.pathname ? activeLink : inactiveLink}>Home</a></Link>
      <Link href="/blog"><a className={paths[1] == router.pathname ? activeLink : inactiveLink}>Blog</a></Link>
      <Link href="/podcast"><a className={paths[2] == router.pathname ? activeLink : inactiveLink}>Podcast</a></Link>
      <Link href="/team"><a className={paths[3] == router.pathname ? activeLink : inactiveLink}>Team</a></Link>
      <Link href="/resources"><a>Resources</a></Link>
      <Link href="/contacts"><a className={paths[4] == router.pathname ? activeLink : inactiveLink}>Contacts</a></Link>
    </>
  );
}