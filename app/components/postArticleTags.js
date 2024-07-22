import Link from 'next/link';

export default function PostArticleTags() {
  
  const tags = ['cloud', 'cybersecurity', 'AI', 'Embedded Systems', 'IoT'];
  
  return (
    <>
      <ul>{tags.map((tag) => <li key={tags[tag]}>{tag}</li>)}</ul>
    </>
  );
}