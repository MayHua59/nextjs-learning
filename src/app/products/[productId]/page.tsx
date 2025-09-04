
import { Metadata } from "next";
type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({params}:Props):Promise<Metadata>=>{
const {productId}=await params;
return {
    title: `Product ${productId}`
}
}

export default async function ProductPage({ params }: Props) {
  const { productId } = await params;

  return (
    <main>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </main>
  );
}
