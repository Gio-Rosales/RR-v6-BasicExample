import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = (
  {
    product,
    children,
    className,
    style,
    onChange,
    value,
    initialValues
  }: ProductCardProps) => {
  const { counter, isMaxCountReached, maxCount, increaseBy, reset } = useProduct({ onChange, product, value, initialValues });

  // console.log('counter', counter);
  return (
    <Provider value={{
      product,
      counter,
      increaseBy,
      maxCount
    }}>
      <div className={`${styles.productCard} ${className}`} id={product.id} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,

          increaseBy,
          reset
        })}
      </div>
    </Provider>
  )
};
