import { LazyExoticComponent } from "react";
import NoLazy from '../01-lazyload/pages/NoLazy';
import {
  LazyLayout,
  LazyRegister,
  LazyFormik,
  LazyFormikYup,
  LazyFormikComponents,
  LazyFormikAbstractation,
  LazyFormikPage,
  LazyDinamicForm
} from '../03-forms/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  default?: boolean;
}

export const routes: Route[] = [
  {
    path: '/register',
    to: '/register',
    Component: LazyRegister,
    name: 'Register Page'
  },
  {
    path: '/register-formik-page',
    to: '/register-formik-page',
    Component: LazyFormikPage,
    name: 'Register Formik Page'
  },
  {
    path: '/dinamic-form',
    to: '/dinamic-form',
    Component: LazyDinamicForm,
    name: 'Dinamic Form'
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
