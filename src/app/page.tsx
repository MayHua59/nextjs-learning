import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div>page</div>
      <Link href="/articles/">Read in English</Link>
    </>
  )
}

export default page