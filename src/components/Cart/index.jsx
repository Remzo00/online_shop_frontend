/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContainer,
    EmptyCartMessage,
    Title,
    CartGrid,
    CartItemCard,
    ItemImageContainer,
    ItemImage,
    ItemContent,
    ItemName,
    ItemDescription,
    PriceQuantityContainer,
    QuantityContainer,
    QuantityLabel,
    QuantityInput,
    PriceContainer,
    TotalPrice,
    UnitPrice,
    RemoveButton,
    SummaryCard,
    SummaryRow,
    SummaryLabel,
    SummaryValue,
    CheckoutButton } from "./index.styled";
import { AppContext } from "../../context/AppContext";
import { addOrderToCart } from "../../services/cart";

export function Cart({ cartItems }){
    const { removeFromCart, cart, updateQuantity } = useContext(AppContext)

    const totalPrice = cart.reduce((total, item) => {
        const itemPrice = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity) || 0;
        return total + (itemPrice * quantity);
    }, 0);

    if (!cart || cart.length === 0) {
        return (
            <EmptyCartMessage>
                <h2>Vaša korpa je prazna</h2>
                <p>Dodajte proizvode u korpu da biste započeli kupovinu</p>
            </EmptyCartMessage>
        );
    }

    return (
        <CartContainer>
            <Title>Vaša korpa</Title>
            
            <CartGrid>
                {cart.map(item => (
                    <CartItemCard key={item._id}>
                        <ItemContent>
                            {item.image && (
                                <ItemImageContainer>
                                    <ItemImage src={item.image} alt={item.name} />
                                </ItemImageContainer>
                            )}
                            
                            <div>
                                <ItemName>{item.name}</ItemName>
                                {item.description && (
                                    <ItemDescription>{item.description}</ItemDescription>
                                )}
                            </div>
                        </ItemContent>

                        <PriceQuantityContainer>
                            <QuantityContainer>
                                <QuantityLabel>Količina:</QuantityLabel>
                                <QuantityInput
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => {
                                        const newQuantity = parseInt(e.target.value);
                                        updateQuantity(item._id, newQuantity);
                                    }}
                                />
                            </QuantityContainer>

                            <PriceContainer>
                                <TotalPrice>
                                    {(parseFloat(item.price) * item.quantity).toFixed(2)} RSD
                                </TotalPrice>
                                <UnitPrice>
                                    {parseFloat(item.price).toFixed(2)} RSD / kom
                                </UnitPrice>
                            </PriceContainer>

                            <RemoveButton onClick={() => removeFromCart(item._id)}>
                                Ukloni
                            </RemoveButton>
                        </PriceQuantityContainer>
                    </CartItemCard>
                ))}
            </CartGrid>

            <SummaryCard>
                <SummaryRow>
                    <SummaryLabel>Ukupno proizvoda:</SummaryLabel>
                    <SummaryValue>{cart.length}</SummaryValue>
                </SummaryRow>
                <SummaryRow className="total">
                    <SummaryLabel>Ukupno za plaćanje:</SummaryLabel>
                    <SummaryValue className="total">{totalPrice.toFixed(2)} RSD</SummaryValue>
                </SummaryRow>
                <CheckoutButton onClick={async () => {
  try {
    await addOrderToCart(cart);
    alert("Porudžbina je uspešno dodata!");
  } catch (error) {
    alert("Došlo je do greške prilikom dodavanja porudžbine");
  }
}}>
  Nastavi ka plaćanju
</CheckoutButton>
            </SummaryCard>
        </CartContainer>
    );
}