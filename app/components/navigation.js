import Link from 'next/link';

export default function Navigation() {
  
  return (
    <>
      <Link href="/"><a>Home</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/podcast"><a>Podcast</a></Link>
      <Link href="/authors"><a>Authors</a></Link>
      <Link href="/contacts"><a>Contacts</a></Link>
    </>
  );
}