/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Card, Image, Price, Title, Button, Name } from "./index.styled";
import { AppContext } from "../../context/AppContext";


export function ProductCard({ product }) {
    const { addToCart } = useContext(AppContext)
    const handleAddToCart = () => {
        const cartItem = {
            _id: product._id,
            name: product.name,
            price: parseFloat(product.price),
            image: product.imageUrl,
            description: product.description
        };
        
        addToCart(cartItem);
        alert("Proizvod je uspešno dodat u korpu!");
    };
    return(
        <Card>
            <Name>{product.name}</Name>
            <Image src={product.imageUrl} />
            <Title>{product.title}</Title>
            <Price>{parseFloat(product.price).toFixed(2)} RSD</Price>
            <Button onClick={handleAddToCart}>Dodaj u korpu</Button>
        </Card>
    )
}