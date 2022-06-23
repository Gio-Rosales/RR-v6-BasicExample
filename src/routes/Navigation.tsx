import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from "./routes";
import logo from '../logo.svg';
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React's logo" />
            <ul>
              {
                routes.map(({ to, name }): JSX.Element => (
                  <li key={to}>
                    <NavLink to={to} className={({ isActive }) => {
                      if (isActive) return 'nav-active';
                    }}>
                      {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(({path, Component}): JSX.Element => (
                <Route key={path} path={path} element={<Component />} />
              ))
            }

            {/* Not found route */}
            <Route path="/*" element={
              <Navigate 
                to={routes.filter((route) => route.default)[0].to}
                replace 
              />
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
