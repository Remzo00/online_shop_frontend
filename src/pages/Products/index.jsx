/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { ProductGrid } from "../../components/ProductGrid"
import axios from "axios";
import { getProducts } from "../../services/products";

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data.products); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
   return (
    <div>
      <h1>Proizvodi</h1>
      <ProductGrid products={products} />
    </div>
  );
}