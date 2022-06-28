import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({onChange, product, value});

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}>
      <div className={`${styles.productCard} ${className}`} id={product.id} style={style}>
        {children}
      </div>
    </Provider>
  )
};
