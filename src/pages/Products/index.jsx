/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { ProductGrid } from "../../components/ProductGrid"
import { getProducts, searchProducts } from "../../services/products";
import { ChipContainer, Container, SearchContainer } from "./index.styled";
import Input from "../../components/Input";
import Chip from "../../components/Chip";
export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ["elektronika", "bizuterija", "odeca"];


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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
   return (
    <Container>
      <SearchContainer>
        <Input placeholder="Pretraži proizvode" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Pretraži</button>
      </SearchContainer>
      <ChipContainer>
        <Chip categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />
      </ChipContainer>
      <ProductGrid products={products} />
    </Container>
  );
}