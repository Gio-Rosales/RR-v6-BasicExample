import { lazy, LazyExoticComponent } from "react";
import NoLazy from '../01-lazyload/pages/NoLazy';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  default?: boolean;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
  {
    path: '/lazy-layout/*',
    to: '/lazy-layout/',
    Component: LazyLayout,
    name: 'Lazy Layout',
    default: true
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },
  {
    to: '/shopping-page',
    path: '/shopping-page',
    Component: ShoppingPage,
    name: 'Shopping page'
  }
];
