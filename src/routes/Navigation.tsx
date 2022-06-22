import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React's logo" />
          <ul>
            <li>
              <NavLink to="/home" className={({isActive}) => {
                if(isActive) return 'nav-active';
              }}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => {
                if(isActive) return 'nav-active';
              }}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => {
                if(isActive) return 'nav-active';
              }}>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={ <h1>About Page</h1> }/>
          <Route path="users" element={ <h1>Users Page</h1> }/>
          <Route path="home" element={ <h1>Root Page</h1> }/>

          {/* Not found route */}
          <Route path="/*" element={ <Navigate to="/home" replace /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
