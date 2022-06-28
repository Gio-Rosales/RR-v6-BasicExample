import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((prevState) => {
      if ( count === 0 ) {
      const { [product.id]: itemToDelete, ...rest} = prevState;

      return rest;
      }

      return {
      ...prevState,
      [product.id]: {...product, count}
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange
  }
}