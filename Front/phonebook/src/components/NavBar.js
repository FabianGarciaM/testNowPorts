import React from 'react'
import { NavLink } from "react-router-dom";

export const NavBar = ({ token ,setToken }) => {

  const logout = () => {
    if(token !== undefined){
      setToken(null);
    }else{
      console.log("++´+´+´+´+")
    }
  };

  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink
          end
          to="/"
          className={({ isActive }) =>
            "nav-item nav-link" + (isActive ? " active" : "")
          }
          aria-current="page"
        >
          Contact
        </NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink
          end
          to="/login"
          className={({ isActive }) =>
            "nav-item nav-link" + (isActive ? " active" : "")
          }
          aria-current="page"
        >
          Login
        </NavLink>
      </li> */}
      <li>
        <button type="button" className="btn btn-light" onClick={logout}>
          logout
        </button>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">
          Disabled
        </a>
      </li> */}
    </ul>
  );
};
