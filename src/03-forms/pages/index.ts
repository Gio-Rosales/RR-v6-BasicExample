import { lazy } from 'react';

export const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../../01-lazyload/layout/LazyLayout'));
export const LazyRegister = lazy(() => import(/* webpackChunkName: "LazyRegister" */ './RegisterPage'));
export const LazyFormik = lazy(() => import(/* webpackChunkName: "LazyFormik" */ './FormikBasicPage'));
export const LazyFormikYup = lazy(() => import(/* webpackChunkName: "LazyFormikYup" */ './FormikYupPage'));
export const LazyFormikComponents = lazy(() => import(/* webpackChunkName: "LazyFormikComponents" */ './FormikComponentsPage'));
export const LazyFormikAbstractation = lazy(() => import(/* webpackChunkName: "LazyFormikAbstractation" */ './FormikAbstraction'));
export const LazyFormikPage = lazy(() => import(/* webpackChunkName: "LazyFormikPage" */ './RegisterFormikPage'));
export const LazyDinamicForm = lazy(() => import(/* webpackChunkName: "LazyDinamicForm" */ './DinamicForm'));
