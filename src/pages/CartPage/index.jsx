import { Cart } from "../../components/Cart";
export function CartPage(){
    const cartItems = [
        { id: 1, title: 'Majica', price: 1200 },
        { id: 2, title: 'Patike', price: 5000 },
      ];
    
      return (
        <div>
          <h1>Vaša korpa</h1>
          <Cart cartItems={cartItems} />
        </div>
      );
}