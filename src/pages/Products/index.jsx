/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { ProductGrid } from "../../components/ProductGrid"
import { getProducts, searchProducts } from "../../services/products";
import { Container, SearchContainer } from "./index.styled";
import Input from "../../components/Input";
import { AppContext } from "../../context/AppContext";
import $ from "jquery";

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const {addToCart} = useContext(AppContext)

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data.products);
      highlightUpdate()
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

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

  const highlightUpdate = () => {
    $(".product-grid").fadeOut(100).fadeIn(500);
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
   return (
    <Container>
      <SearchContainer>
        <Input placeholder="Pretraži proizvode" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Pretraži</button>
      </SearchContainer>
      <ProductGrid products={products} onAddToCart={handleAddToCart} />
    </Container>
  );
}