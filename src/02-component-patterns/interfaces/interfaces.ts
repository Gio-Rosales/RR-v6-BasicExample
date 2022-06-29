import { CSSProperties, ReactElement } from "react";

export interface ProductCardProps {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: CSSProperties | undefined;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
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
  maxCount?: number | undefined;
}

export interface ProductCardHOCProps {
  ({ children, product, value}: ProductCardProps): JSX.Element;
  Buttons:  (Props: ProductButtonsProps) => JSX.Element;
  Image:    (Props: ProductImageProps) => JSX.Element;
  Title:    (Props: ProductTitleProps) => JSX.Element;
}

export interface ProductInCart extends Product {
  count: number
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}