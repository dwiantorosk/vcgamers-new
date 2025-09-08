// /components/ProductList.tsx
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto snap-x snap-mandatory">
      <div className="flex gap-4 p-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
