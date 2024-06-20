import Navigation from './navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function header() {
  
  return (
    <>
      <div>
        <Image src="" alt="Tech Minimalist Logo" />
        <button>X</button>
      </div>
      <div>
        {Navigation}
      </div>
    </>
  );
}