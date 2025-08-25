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
      <div className="main-footer">
        <div className="container">
          <div className="col-50 d-flex">
            <div className="col-33">
              <h3>DC COMICS</h3>
              <ul>
                <li>
                  Characters
                </li>
                <li>
                  Comics
                </li>
                <li>
                  Movies
                </li>
                <li>
                  TV
                </li>
                <li>
                  Games
                </li>
                <li>
                  Videos
                </li>
                <li>
                  News
                </li>
              </ul>
              <h3>SHOP</h3>
              <ul>
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </div>
            <div className="col-33">
              <h3>DC</h3>
              <ul>
                <li>Term Of Use</li>
                <li>Privacy Policy</li>
                <li>Ad Choices</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Subscriptions</li>
                <li>Talent Workshops</li>
                <li>CPSC Certificates</li>
                <li>Ratings</li>
                <li>Shop Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-33">
              <h3>SITES</h3>
              <ul>
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
              </ul>
            </div>
          </div>
          <div className="col-50">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
