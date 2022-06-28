import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  value?: number
  onChange?: ((args: onChangeArgs) => void) | undefined;
}

export const useProduct = (
  { onChange, product, value = 0 }: useProductArgs
) => {
  const [counter, setCounter] = useState(value);
  const increaseBy = (value: number) => {

    const newCounter = Math.max(counter + value, 0);

    setCounter(newCounter);

    onChange && onChange({ product, count: newCounter });
  };

  useEffect(() => {
    setCounter(value)
  }, [value]);
  

  return {
    counter,
    increaseBy,
  };
};
