import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Header from "./Header";
import samsung from "../images/smartphone1.jpg";
import Iphone from "../images/smartphone2.jpg";
import OnePlus from "../images/smartphone3.jpg";
import nokia from "../images/smartphone4.jpeg";
import samsung1 from "../images/smartphone5.jpeg";
import OnePlus2 from "../images/smartphone6.jpeg";
import OnePlus3 from "../images/smartphone7.jpeg";
import laptop from "../images/Laptop.jpg";
import laptop1 from "../images/Laptop1.jpeg";
import laptop2 from "../images/Laptop2.jpeg";
import laptop3 from "../images/Laptop3.jpeg";
import laptop4 from "../images/Laptop4.jpeg";
import laptop5 from "../images/Laptop5.jpeg";
import laptop6 from "../images/Laptop6.jpeg";
import watch1 from "../images/smartwatch1.jpg";
import watch2 from "../images/smartwatch2.jpeg";
import watch3 from "../images/smartwatch3.jpg";
import watch4 from "../images/smartwatch4.jpg";
import watch5 from "../images/smartwatch5.jpg";
import flipcart from "../images/flipcart1.jpg";
import ProductList from "../mapping/ProductList";
import LaptopList from "../mapping/LaptopList";
import BackPack from "../mapping/BackPack";
import Refrigerator from "../mapping/Refrigerator";

const Products = () => {
  const [cartQty, setCartQty] = useState(0);

  const addToCart = () => {
    setCartQty(cartQty + 1);
  };

  return (
    <div className="productMain">
      <header className="productHeader">
        <div className="search-product">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <nav>
          <ul class="">
            <li>
              <a href="">My Acccount</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
            <li>
              <Link to="/cart">
                Cart <span className="cartQty">{cartQty}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="product-main">
        <img src={flipcart} alt="../" />
        <div className="card-container">
          <h1>SmartPhones</h1>
          <div className="products-wise">
            <div className="ProductCard">
              <img src={samsung} alt="../" />
              <div className="card-body">
                <h1>Vivo v50</h1>
                <p>Brand : Samsung</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={Iphone} alt="../" />
              <div className="card-body">
                <h1>iPhone 13</h1>
                <p>Brand : iPhone</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={OnePlus} alt="../" />
              <div className="card-body">
                <h1>OnePlus 13s</h1>
                <p>Brand : OnePlus</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={nokia} alt="../" />
              <div className="card-body">
                <h1>OnePlus 13s</h1>
                <p>Brand : OnePlus</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={samsung1} alt="../" />
              <div className="card-body">
                <h1>OnePlus 13s</h1>
                <p>Brand : OnePlus</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={OnePlus2} alt="../" />
              <div className="card-body">
                <h1>OnePlus 13s</h1>
                <p>Brand : OnePlus</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={OnePlus3} alt="../" />
              <div className="card-body">
                <h1>OnePlus 13s</h1>
                <p>Brand : OnePlus</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
          <h1>Laptop and MacBook</h1>
          <div className="products-wise">
            <div className="ProductCard">
              <img src={laptop} alt="../" />
              <div className="card-body">
                <h1>MacBook 16″</h1>
                <p>Brand : Apple</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={laptop1} alt="../" />
              <div className="card-body">
                <h1>MacBook 15″</h1>
                <p>Brand : Apple</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={laptop2} alt="../" />
              <div className="card-body">
                <h1>MacBook 14″</h1>
                <p>Brand : Apple</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={laptop3} alt="../" />
              <div className="card-body">
                <h1>MacBook 17″</h1>
                <p>Brand : Apple</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={laptop4} alt="../" />
              <div className="card-body">
                <h1>MacBook 10″</h1>
                <p>Brand : Apple</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={laptop5} alt="../" />
              <div className="card-body">
                <h1>MacBook 11″</h1>
                <p>Brand : Apple</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={laptop6} alt="../" />
              <div className="card-body">
                <h1>MacBook 13″</h1>
                <p>Brand : Apple</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
          <h1>Smart Watches</h1>
          <div className="products-wise">
            <div className="ProductCard">
              <img src={watch1} alt="../" />
              <div className="card-body">
                <h1>Watch 7</h1>
                <p>Brand : Samsung</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={watch2} alt="../" />
              <div className="card-body">
                <h1>Watch 6</h1>
                <p>Brand : Samsung</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={watch3} alt="../" />
              <div className="card-body">
                <h1>Watch Series 10</h1>
                <p>Brand : Apple</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={watch4} alt="../" />
              <div className="card-body">
                <h1> Watch Pro</h1>
                <p>Brand : CMF</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="ProductCard">
              <img src={watch5} alt="../" />
              <div className="card-body">
                <h1> Watch Pro</h1>
                <p>Brand : CMF</p>
                <button onClick={addToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <h1>BABIES PRODUCTS</h1>
          <div className="products-wise">
            {ProductList.map((prodList) => (
              <div key={prodList.id}>
                <div className="ProductCard">
                  <img
                    src={prodList.img}
                    style={{ width: "250px", height: "200px" }}
                    alt="../"
                  />
                  <div className="card-body">
                    <h1>{prodList.title}</h1>
                    <h6>{prodList.price}</h6>
                    <button onClick={addToCart}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-container">
          <h1>New LAPTOP Products</h1>
          <div className="products-wise">
            {LaptopList.map((lapitems) => (
              <div key={lapitems.id}>
                <div className="ProductCard">
                  <img
                    src={lapitems.img}
                    alt="/"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <div className="card-body">
                    <h1>{lapitems.productName}</h1>
                    <p>{lapitems.price}</p>
                    <button onClick={addToCart}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-container">
          <h1>Laptop Bags</h1>
          <div className="products-wise">
            {BackPack.map((bags) => (
              <div key={bags.id}>
                <div className="ProductCard">
                  <img
                    src={bags.img}
                    style={{ width: "200px", height: "200px" }}
                    alt="./"
                  />
                  <div className="card-body">
                    <h1>{bags.name}</h1>
                    <p>{bags.price}</p>
                    <button onClick={addToCart}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-container">
          <h1>Refrigerator</h1>
          <div className="products-wise">
            {Refrigerator.map((bridge) => (
              <div key={bridge.id}>
                <div className="ProductCard">
                  <img
                    src={bridge.img}
                    style={{
                      width: "100px",
                      height: "200px",
                      borderRadius: 0,
                    }}
                    alt="/"
                  />
                  <div className="card-body">
                    <h1>{bridge.name}</h1>
                    <p>
                      {bridge.price}- {bridge.color}
                    </p>
                    <button onClick={addToCart}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer1">
        <ul>
          <li>Become a Seller</li>
          <li>Advertise</li>
          <li>Gift Card</li>
          <li>Help Center</li>
          <li>20015 - 2025 SmartBuy E-Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
