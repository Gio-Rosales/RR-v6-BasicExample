import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import { ProductImageProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imageToShow: string;

  if (img) {
    imageToShow = img;
  } else if (product.img) {
    imageToShow = product.img;
  } else {
    imageToShow = noImage;
  }

  return (
    <img
      src={imageToShow}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};