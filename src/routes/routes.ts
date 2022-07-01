import { lazy, LazyExoticComponent } from "react";
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  default?: boolean;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));
const LazyRegister = lazy(() => import(/* webpackChunkName: "LazyRegister" */ '../03-forms/pages/RegisterPage'));
const LazyFormik = lazy(() => import(/* webpackChunkName: "LazyRegister" */ '../03-forms/pages/FormikBasicPage'));
const LazyFormikYup = lazy(() => import(/* webpackChunkName: "LazyRegister" */ '../03-forms/pages/FormikYupPage'));
const LazyFormikComponents = lazy(() => import(/* webpackChunkName: "LazyRegister" */ '../03-forms/pages/FormikComponentsPage'));
const LazyFormikAbstractation = lazy(() => import(/* webpackChunkName: "LazyRegister" */ '../03-forms/pages/FormikAbstraction'));


export const routes: Route[] = [
  {
    path: '/register',
    to: '/register',
    Component: LazyRegister,
    name: 'Register Page'
  },
  {
    path: '/register-formik',
    to: '/register-formik',
    Component: LazyFormik,
    name: 'Formik Basic'
  },
  {
    path: '/register-formik-yup',
    to: '/register-formik-yup',
    Component: LazyFormikYup,
    name: 'Formik Yup'
  },
  {
    path: '/register-formik-components',
    to: '/register-formik-components',
    Component: LazyFormikComponents,
    name: 'Formik Components'
  },
  {
    path: '/register-formik-abstractation',
    to: '/register-formik-abstractation',
    Component: LazyFormikAbstractation,
    name: 'Formik Abstractation'
  },
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
];
