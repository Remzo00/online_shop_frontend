import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { AppContext } from "../../context/AppContext";
export function CartPage(){
  const { cart } = useContext(AppContext)
    
      return (
        <div>
          <h1>Vaša korpa</h1>
          <Cart cartItems={cart} />
        </div>
      );
}