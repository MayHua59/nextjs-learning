import Link from "next/link";

export const metadata = {
  title: "Products"
};

export default function ProductsPage() {
  // Example static product list
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
  ];

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`} replace>{product.name}</Link>
        ))}
      </ul>
    </main>
  );
}
