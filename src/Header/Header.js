import React from "react";
import {Link} from 'react-router-dom';
import './header.scss';
import NavigationMenu from "./NavigationMenu";

function Header() {
  return (
    <header className="header">
      <div className="container py-2">
        <div className="header-menu row">
          <div className="col-12 col-md-3">
            <Link to="/" className="logo navbar-brand row justify-content-center">
             ZoZoflow
            </Link>
          </div>
        </div>
        <div className="header-menu row">
          <NavigationMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;