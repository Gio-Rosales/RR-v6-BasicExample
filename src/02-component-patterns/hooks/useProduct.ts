import { useEffect, useRef, useState } from "react";
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
  const isControlled = useRef(!!onChange);
  const increaseBy = (value: number) => {
    if(isControlled.current) {
      return onChange!({product, count: value});
    }

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
