import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[]
}

export interface Product {
  id: string;
  title: string;
  img?: string
}

export interface ProductTitleProps {
  title?: string
}

export interface ProductButtonsProps {
  counter: number;
  increaseBy: (param: number) => void;
}

export interface ProductContextProps extends ProductButtonsProps {
  product: Product
}