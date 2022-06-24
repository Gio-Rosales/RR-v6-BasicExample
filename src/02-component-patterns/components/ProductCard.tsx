import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

const INITIAL_VALUE = 0;

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct(INITIAL_VALUE);

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}>
      <div className={styles.productCard} id={product.id}>
        {children}
      </div>
    </Provider>
  )
};
