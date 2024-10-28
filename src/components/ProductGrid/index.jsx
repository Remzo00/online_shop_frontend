/* eslint-disable react/prop-types */
import { Grid } from "./index.styled";
import { ProductCard } from "../ProductCard";

export function ProductGrid({products}){
    return(
    <Grid>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </Grid>
    )
}