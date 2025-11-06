import React from "react";
import headerLogo from "../images/header_logo_png.png";
import flipcartCart from "../images/flipcartCart.jpg";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cartMain">
      <div className="cartHeader">
        <div className="cartHeaderLogo">
          <img src={headerLogo} alt="./logo" />
        </div>
        <div className="cartHeaderSearch">
          <div>
            <form action="">
              <input
                type="text"
                placeholder="Search for products, brands and more"
              />
              <button>Search</button>
            </form>
          </div>
        </div>
        <div className="cartHeaderLoginLogout">
          <a href="">Logout</a>
        </div>
      </div>
      <div className="cartBody">
        <div>
          <img src={flipcartCart} alt="./flipcartCart" />
          <div className="cartBodyItem">
            <div className="cartItems">No Cart Items?</div>
            <div>Please add to cart the item after show your items.</div>
            <div>
              <button>Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cartFooter">
        <div className="cartFooteritem  ">
          <div className="policy">
            <span>Policies :</span>
            <a href="">Returns Policy </a>
            <a href="">Terms of use </a>
            <a href="">SecurityPrivacy</a>
          </div>
          <div className="cartCopyRights">
            <div>&copy; 2007-2025 Flipkart.com</div>
          </div>
          <div className="cartHelp">
            <span>Need help? Visit the </span>
            <a href="">Help Center</a>
            <span> or</span>
            <a href="">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
