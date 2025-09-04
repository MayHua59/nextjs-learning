import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>This is your root page.</p>
      <Link href="/counter">Counter</Link>
      <Link href="/products">Products</Link>
    </main>
  );
}
