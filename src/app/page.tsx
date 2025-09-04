import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div>page</div>
      <Link href="/articles/article-123?lang=en">Read in English</Link>
      <Link href="/articles/article-123?lang=kr">Read in Korea</Link>
      <Link href="/articles/article-123?lang=jp">Read in Japan</Link>
    </>
  )
}

export default page