import { ProductGrid } from "../../components/ProductGrid"

export function Products() {
    const products = [
        { id: 1, title: 'Majica', price: 1200, image: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Patike', price: 5000, image: 'https://via.placeholder.com/150' },
        { id: 3, title: 'Ruksak', price: 3500, image: 'https://via.placeholder.com/150' },
      ];

   return (
    <div>
      <h1>Proizvodi</h1>
      <ProductGrid products={products} />
    </div>
  );
}