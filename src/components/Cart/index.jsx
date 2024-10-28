/* eslint-disable react/prop-types */
import { CartContainer, CartItem, Total } from "./index.styled";

export function Cart({ cartItems }){
    return (
        <CartContainer>
            {cartItems.map((item) => (
                <CartItem key={item.id}>
                    <span>{item.title}</span>
                    <span>{item.price} RSD</span>
                </CartItem>
            ))}
            <Total>Ukupno: {cartItems.reduce((sum, item) => sum + item.price, 0)} RSD</Total>
        </CartContainer>
    );
}