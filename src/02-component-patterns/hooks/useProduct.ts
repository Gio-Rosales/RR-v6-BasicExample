import { useEffect, useState, useRef } from 'react';
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  value?: number
  onChange?: ((args: onChangeArgs) => void) | undefined;
  initialValues?: InitialValues
}

export const useProduct = (
  { onChange, product, value = 0, initialValues }: useProductArgs
) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);
  const increaseBy = (value: number) => {

    let newCounter = Math.max(counter + value, 0);

    if(initialValues?.maxCount) {
      newCounter = Math.min(newCounter, initialValues.maxCount);
    }

    setCounter(newCounter);

    onChange && onChange({ product, count: newCounter });
  };
  const reset = () => {
    setCounter(initialValues?.count || value);
  }

  useEffect(() => {
    if(!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    
    increaseBy,
    reset
  };
};
