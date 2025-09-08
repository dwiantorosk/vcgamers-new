// src/app/products/[id]/page.tsx
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

async function getProduct(id: string): Promise<Product | undefined> {
  // Dummy data (bisa diganti fetch API)
  const products: Product[] = [
    { id: "1", name: "Diamond Free Fire", price: 50000, image: "/media/ml.webp", description: "Top up diamond Free Fire termurah & cepat." },
    { id: "2", name: "Diamond Mobile Legends", price: 60000, image: "/media/ml.webp", description: "Top up diamond Mobile Legends resmi." },
  ];

  return products.find((p) => p.id === id);
}

interface ProductDetailProps {
  params: { id: string };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const product = await getProduct(params.id);

  if (!product) {
    return <h1 className="text-center text-red-500">Produk tidak ditemukan</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={300}
          className="rounded-xl mx-auto"
        />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-xl text-green-600 mt-2">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
        <p className="text-gray-700 mt-4">{product.description}</p>

        <button className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700">
          Beli Sekarang
        </button>
      </div>
    </div>
  );
}
