import ProductList from '@/component/ProductList';

export default function ProductsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-black mb-8 text-center">Available Products</h1>
      <ProductList />
    </div>
  );
}