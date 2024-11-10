/* eslint-disable react/prop-types */
import { Card, Image, Price, Title, Button, Name } from "./index.styled";

export function ProductCard({ product }) {
    return(
        <Card>
            <Name>{product.name}</Name>
            <Image src={product.image} />
            <Title>{product.title}</Title>
            <Price>${product.price}</Price>
            <Button>Dodaj u korpu</Button>
        </Card>
    )
}