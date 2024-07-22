'use client';

export default function Newsletter({ subscribe }) {
  
  return (
    <form className="Newsletter" action={subscribe} >
      <input name="fullname" type="text" />
      <input name="email" type="email" />
      <button>Subscribe</button>
    </form>
  );
}