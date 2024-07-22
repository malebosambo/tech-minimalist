'use client';

export default function Filters({ filter }) {
  
  return (
    <>
      <div>
        <form action={filter}>
          <input type="select" name="Tag" />
          <input type="select" name="Level" />
        </form>
      </div>
    </>
  );
}