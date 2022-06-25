import { CSSProperties, ReactElement } from "react";

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties | undefined;
}

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductTitleProps {
  className?: string;
  title?: string;
  style?: CSSProperties | undefined;
}

export interface ProductImageProps {
  className?: string;
  img?: string;
  style?: CSSProperties | undefined;
}

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties | undefined;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (param: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product}: ProductCardProps): JSX.Element;
  Buttons:  (Props: ProductButtonsProps) => JSX.Element;
  Image:    (Props: ProductImageProps) => JSX.Element;
  Title:    (Props: ProductTitleProps) => JSX.Element;
}
