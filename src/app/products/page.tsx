import Link from "next/link";

type ProductsPageProps = {
    params: Record<string, string>;
    searchParams: Record<string, string | string[]>;
};

const products = [
            { id: 1, name: "Apple iPhone", category: "Electronics" },
            { id: 2, name: "Nike Sneakers", category: "Footwear" },
            { id: 3, name: "Samsung TV", category: "Electronics" },
            { id: 4, name: "Levi's Jeans", category: "Apparel" },
            { id: 5, name: "KitchenAid Mixer", category: "Home Appliances" }
        ];

export default function ProductsPage({ params, searchParams }: ProductsPageProps) {

        

        return (
        <>
        <h1>Categories</h1>
        <Link href="/products?category='Electronics'">Electronics</Link>
        <Link href="/products?category='Apparel'">Apparel</Link>
        {products.map(product => {
            return (
               <div>
                <h1>{product.id}</h1>
                 <h1>{product.name}</h1>
                <h1>{product.category}</h1>
               </div>
            )
        })}
        </>
        );
}