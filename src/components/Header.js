import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import headerLogo from "../images/header_logo_png.png";

const Header = () => {
  return (
    <header>
      <div class="header">
        <div>
          <h1>
            SmartBuy E-Cart
            <br />
            <p>Explore Plus</p>
          </h1>
        </div>
        <nav>
          <ul class="">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/seller">Become a Seller</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
              <span className="cartQty">0</span>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="toggleBar">
          <div className="toggleBarItem"></div>
          <div className="toggleBarItem"></div>
          <div className="toggleBarItem"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
