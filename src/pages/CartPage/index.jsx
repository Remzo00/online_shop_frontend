import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { AppContext } from "../../context/AppContext";
export function CartPage(){
  const { cart } = useContext(AppContext)
    
      return (
        <div>
          <Cart cartItems={cart} />
        </div>
      );
}