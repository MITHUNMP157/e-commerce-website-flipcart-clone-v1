import React from "react";
import "./Seller.css";
import flipcart1 from "../images/flipcart2.jpg";
import headerLogo from "../images/header_logo_png.png";
import appleStore from "../images/apple_store.png";
import playStore from "../images/play_store.png";
import socialFB from "../images/facebook.png";
import socialInstagram from "../images/instagram.png";
import socialLinkedin from "../images/linkedin.png";
import socialYoutube from "../images/youtube.png";
import socialTwitter from "../images/twitter.png";

const Seller = () => {
  return (
    <div>
      <div className="seller-header">
        <div>
          SmartBuy E-Cart <br /> <h1>Seller Hub</h1>
        </div>
        <div>
          <ul>
            <li>Sell Online</li>
            <li>Fees and Commission</li>
            <li>Grow</li>
            <li>Learn</li>
            <li>Shopsy</li>
          </ul>
        </div>
      </div>
      <div className="sellerinfo">
        <h1 className="sinfo-title">Sell Online with SmartBuy E-Cart</h1>
        <img className="sinfo-image" src={flipcart1} alt="../" />
      </div>
      <div className="sellerinfo-specify">
        <ul>
          <li>
            <img
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/crore_users_revamp.svg"
              alt=""
            />
            <div>
              45 Core+ SmartBuy
              <br /> customers
            </div>
          </li>
          <li>
            <img
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/wallet-icon.svg"
              alt=""
            />
            <div>
              7* days secure & regular <br /> payments
            </div>
          </li>
          <li>
            <img
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/low-cost-icon.svg"
              alt=""
            />
            <div>
              Low cost of <br />
              doing business
            </div>
          </li>
          <li>
            <img
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/seller-support-icon.svg"
              alt=""
            />
            <div>
              One click <br />
              Seller Support
            </div>
          </li>
          <li>
            <img
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/shopping-bag-icon.svg"
              alt=""
            />
            <div>
              Access to the <br />
              Big billion Days and more
            </div>
          </li>
        </ul>
      </div>
      <div className="stories-info">
        <h2>
          <span className="stories">Seller Success</span> Stories
        </h2>
        <div>
          <div className="stories-info-person">
            <h3>Raju Lunawath,</h3>
            <p>
              Starting with just one category, their unwavering support and
              innovative platform empowered me to grow exponentially, expanding
              to six diverse categories and achieving an astounding 5x growth
              year on year.
            </p>
          </div>
          <div className="stories-info-person">
            <h3>Dinesh Kumar Rajpurohit,</h3>
            <p>
              your listings are live in less than 2 hours and you can start
              selling anywhere in India. I started my business with 3 products,
              and today I own 3 brands and have also created employment
              opportunities for my family and team of 25.
            </p>
          </div>
        </div>
      </div>
      <div className="sellerAccountsInfo">
        <div className="sellerAccountsInfoList">
          <ul>
            <li>
              <a href="#createAccount">Create Account</a>
            </li>
            <li>
              <a href="">List Products</a>
            </li>
            <li>
              <a href="">Storage & Shipping</a>
            </li>
            <li>
              <a href="">Receive Payments</a>
            </li>
            <li>
              <a href="">Grow Faster</a>
            </li>
            <li>
              <a href="">Seller App</a>
            </li>
            <li>
              <a href="">Help & Support</a>
            </li>
          </ul>
        </div>
        <div className="sellerAccountsInfoDescription">
          <h2>
            Create Account
            <br />
            <div></div>
          </h2>

          <div id="createAccount" className="createAccountClass">
            <p>
              Creating your SmartBuy E-Cart seller account is a quick process,
              taking less than 10 minutes, and requires only 3 documents. Follow
              the checklist to ensure a seamless account creation experience. By
              having these documents ready, you can streamline the account
              creation process and get started on SmartBuy E-Cart as an online
              seller in no time.
            </p>
            <span>* for selling in all categories except for book</span>
            <span>** for selling under books category</span>
            <div className="createAccountGst">
              <h3>Don’t have a GSTIN?</h3>
              <p>
                Follow the steps below to generate for your online business.
              </p>
              <div className="createAccountGstRgstr">
                <ul>
                  <li>
                    <img
                      src="https://static-assets-web.flixcart.com/fk-sp-static/images/revamp-user.svg"
                      alt=""
                    />
                    <div>Register / Login to www.gst.gov.in</div>
                  </li>
                  <li>
                    <img
                      src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/FileSvg.svg"
                      alt=""
                    />
                    <div>Fill in the GST Enrolment Application Form</div>
                  </li>
                  <li>
                    <img
                      src="https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/Files.svg"
                      alt=""
                    />
                    <div>Submit Enrolment Application</div>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              SmartBuy E-Cart offers a diverse range of over 3000+ categories
              where you can sell your products. These categories represent just
              a fraction of the wide variety available on SmartBuy E-Cart,
              providing ample opportunities for sellers to showcase their
              products to a large customer base. Here are some popular
              categories to consider for online selling:
            </p>

            <div className="productCategories">
              <h3>Popular categories to sell across India</h3>
              <div className="productCategoriesList">
                <div>Sell Mobile Online</div>
                <div>Sell Clothes Online</div>
                <div>Sell Sarees Online</div>
                <div>Sell Electronics Online</div>
                <div>Sell Women Clothes Online</div>
                <div>Sell Shoes Online</div>
                <div>Sell Jewellery Online</div>
                <div>Sell Tshirts Online</div>
                <div>Sell Furniture Online</div>
                <div>Sell Makeup Online</div>
                <div>Sell Paintings Online</div>
                <div>Sell Watch Online</div>
                <div>Sell Books Online</div>
                <div>Sell Home Products Online</div>
                <div>Sell Kurtis Online</div>
                <div>Sell Beauty Products Online</div>
                <div>Sell Toys Online</div>
                <div>Sell Appliances Online</div>
                <div>Sell Shirts Online</div>
                <div>Sell Indian Clothes Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sellerFooter">
        <h1>Popular categories to sell across India</h1>
        <div className="footerItem">
          <div className="footerItemWrapper">
            <div>Sell Mobile Online</div>
            <div>Sell Clothes Online</div>
            <div>Sell Sarees Online</div>
            <div>Sell Electronics Online</div>
            <div>Sell Women Clothes Online</div>
          </div>
          <div className="footerItemWrapper">
            <div>Sell Shoes Online</div>
            <div>Sell Jewellery Online</div>
            <div>Sell Tshirts Online</div>
            <div>Sell Furniture Online</div>
            <div>Sell Makeup Online</div>
          </div>
          <div className="footerItemWrapper">
            <div>Sell Paintings Online</div>
            <div>Sell Watch Online</div>
            <div>Sell Books Online</div>
            <div>Sell Home Products Online</div>
            <div>Sell Kurtis Online</div>
          </div>
          <div className="footerItemWrapper">
            <div>Sell Beauty Products Online</div>
            <div>Sell Toys Online</div>
            <div>Sell Appliances Online</div>
            <div>Sell Shirts Online</div>
            <div>Sell Indian Clothes Online</div>
          </div>
        </div>
        <div className="footerItemSocial">
          <div className="footerItemSocialWrapper">
            <h3>Sell Online</h3>
            <div>Create Account</div>
            <div>List Products</div>
            <div>Storage & Shipping</div>
            <div>Fees & Commission</div>
            <div>Help & Support</div>
          </div>
          <div className="footerItemSocialWrapper">
            <h3>Grow Your Business</h3>
            <div>Insights & Tools</div>
            <div>SmartBuy E-Cart Ads</div>
            <div>SmartBuy E-Cart Value Services</div>
            <div>Shopping Festivals</div>
          </div>
          <div className="footerItemSocialWrapper">
            <h3>Learn More</h3>
            <div>FAQs</div>
            <div>Seller Success Stories</div>
            <div>Seller Blogs</div>
          </div>
          <div className="footerItemSocialWrapper">
            <h4>Download Mobile App</h4>
            <div>
              <img src={playStore} alt="./Play Store" />
            </div>
            <div>
              <img src={appleStore} alt="./Apple Store" />
            </div>
            <div>
              <div>
                Stay Connected
                <div className="footerSocialMedia">
                  <img src={socialFB} alt="./facebook" />
                  <img src={socialInstagram} alt="./instagram" />
                  <img src={socialLinkedin} alt="./linkedin" />
                  <img src={socialYoutube} alt="./youtube" />
                  <img src={socialTwitter} alt="./twitter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foooterCopyRights">
        <img src={headerLogo} alt="./logo" />
        <div>&copy; 2025 SmartBuy E-Cart. All Rights Reserved</div>
        <div>
          <a href="">Privacy Policy</a> - <a href="">Terms of Use</a>
        </div>
      </div>
    </div>
  );
};

export default Seller;
