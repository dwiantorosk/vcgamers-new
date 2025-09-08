import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-transform hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
      <p className="text-purple-600 font-bold mb-3">
        Rp {product.price.toLocaleString()}
      </p>

      <Link href={`/products/${product.id}`}>
        <button className="mt-auto w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
          Beli Sekarang
        </button>
      </Link>
    </div>
  );
}
