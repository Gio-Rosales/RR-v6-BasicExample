import { useContext } from "react";

import { ProductTitleProps } from "../interfaces/interfaces";

import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({ title }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>{title ? title : product.title}</span>
  );
};