import { Card, Image, Price, Title, Button } from "./index.styled";

export function ProductCard({ product }) {
    return(
        <Card>
            <Image src={product.image} />
            <Title>{product.title}</Title>
            <Price>${product.price}</Price>
            <Button>Dodaj u korpu</Button>
        </Card>
    )
}