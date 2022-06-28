import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((prevState) => {
      const actualProduct = shoppingCart[product.id] || { ...product, count: 0 }

      if(Math.max(actualProduct.count + count, 0) > 0) {
        actualProduct.count += count;

        return {
          ...prevState,
          [product.id]: actualProduct
        };
      }

      const { [product.id]: deletedItem, ...rest } = prevState;

      return rest;
    });
  };

  return {
    shoppingCart,
    onProductCountChange
  }
}