import React from "react";
import "./Main.css";
import headerLogo from "../images/header_logo_png.png";
import samsung_s25 from "../images/h-smartphone1.jpg";
import oneplus_13 from "../images/h-smartphone2.jpg";
import google_pixel_9 from "../images/h-smartphone3.jpg";
import samsung_galaxy_z_fold from "../images/h-smartphone4.jpg";

const Main = () => {
  return (
    <main>
      <div className="container">
        <h1>Welcome to our SmartBuy E-Cart.</h1>
        <p>
          Mobile phones are no more merely a part of our lives. Whether it's to
          stay connected with friends and family or to keep abreast of important
          developments around the world, mobiles are no longer for sending a
          text or making a call. From budget to state-of-the-art smartphones;
          indigenous names to global big-wigs - a whole universe of mobiles
          await you on Flipkart. Whether you’re looking for waterdrop notch
          screens, a high screen to body ratio, AI-powered sensational cameras,
          high storage capacity, blazing quick processing engines or reflective
          glass designs, rest assured you won’t have to venture anywhere else
          for your smartphone needs.
        </p>
        <div className="trendItems">
          <a href=""> REDMI Note 14 Pro+ 5G</a> |<a href="">iPhone 16</a> |
          <a href="">iPhone 15</a> |<a href="">iPhone 15 Plus</a> |
          <a href="">iPhone 15 Pro </a>|<a href="">iPhone 15 Pro Max </a>|
          <a href="">Vivo x 100 </a>|<a href="">OPPO Find X8 </a>|
          <a href="">Pixel 7a </a>|<a href="">Moto Edge 40 </a>|
          <a href="">POCO C55</a> |<a href="">Samsung Galaxy S24 5G</a>
        </div>
        <div className="cardContainer">
          <div className="cardMain">
            <div className="cardImg">
              <img src={samsung_s25} alt="../" className="small-imgs" />
            </div>
            <div className="card-body">
              <h3>Samsung Galaxy S25</h3>
              <p>
                A recent birth of six tiger cubs to a Royal Bengal tigress in
                the Delhi Zoo marks a significant event, with the largest litter
                in the zoo in two decades
              </p>
            </div>
          </div>
          <div className="cardMain">
            <div className="cardImg">
              <img src={oneplus_13} alt="../" className="small-imgs" />
            </div>
            <div className="card-body">
              <h3>OnePlus 13</h3>
              <p>
                A recent birth of six tiger cubs to a Royal Bengal tigress in
                the Delhi Zoo marks a significant event, with the largest litter
                in the zoo in two decades
              </p>
            </div>
          </div>
          <div className="cardMain">
            <div className="cardImg">
              <img src={google_pixel_9} alt="../" className="small-imgs" />
            </div>
            <div className="card-body">
              <h3>Google Pixel 9</h3>
              <p>
                A recent birth of six tiger cubs to a Royal Bengal tigress in
                the Delhi Zoo marks a significant event, with the largest litter
                in the zoo in two decades
              </p>
            </div>
          </div>
          <div className="cardMain">
            <div className="cardImg">
              <img
                src={samsung_galaxy_z_fold}
                alt="../"
                className="small-imgs"
              />
            </div>
            <div className="card-body">
              <h3>Samsung Galaxy Z Fold 7</h3>
              <p>
                A recent birth of six tiger cubs to a Royal Bengal tigress in
                the Delhi Zoo marks a significant event, with the largest litter
                in the zoo in two decades
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
