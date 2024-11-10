/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { ProductGrid } from "../../components/ProductGrid"
import axios from "axios";
import { getProducts, searchProducts } from "../../services/products";

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


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

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await searchProducts(searchTerm); 
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
   return (
    <div>
      <h1>Proizvodi</h1>
       <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pretraži proizvode"
      />
      <button onClick={handleSearch}>Pretraži</button>
      <ProductGrid products={products} />
    </div>
  );
}