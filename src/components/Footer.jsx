import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-list bg-blue">
        <div className="container">
          <ul>
            <li>
              <img src="/img/buy-comics-digital-comics.png" alt="" />
              <a href="#">DIGITAL COMICS</a>
            </li>
          </ul>
          <ul>
            <li>
              <img src="public/img/buy-comics-merchandise.png" alt="" />
              <a href="#">DC MERCHANDISE</a>
            </li>
          </ul>
          <ul>
            <li>
              <img src="public/img/buy-comics-subscriptions.png" alt="" />
              <a href="#">SUBSCRIPTION</a>
            </li>
          </ul>
          <ul>
            <li>
              <img src="public/img/buy-comics-shop-locator.png" alt="" />
              <a href="#">COMIC SHOP LOCATOR</a>
            </li>
          </ul>
          <ul>
            <li>
              <img src="public/img/buy-dc-power-visa.svg" alt="" />
              <a href="#">DC POWER VISA</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
