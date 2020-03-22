import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer">
      <div class="row footer__link">
        <div class="col-2"></div>
        <div class="col-4">
          <ul class="footer-nav">
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Press</Link>
            </li>
            <li>
              <Link to="/">iOS App</Link>
            </li>
            <li>
              <Link to="/">Android App</Link>
            </li>
          </ul>
        </div>
        <div class="col-3">
          <ul class="social-links">
            <li>
              <a href="/">
                <ion-icon
                  name="logo-facebook"
                  class="social-logo logo-facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="/">
                <ion-icon
                  name="logo-twitter"
                  class="social-logo logo-twitter"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="/">
                <ion-icon
                  name="logo-google"
                  class="social-logo logo-googleplus"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="/">
                <ion-icon
                  name="logo-instagram"
                  class="social-logo logo-instagram"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-3"></div>
      </div>

      <div class="row footer__quote">
        <p>“Does it make you feel big to make a little boy cry?”</p>
        <p>Huy Xu</p>
      </div>
    </footer>
  );
}

export default Footer;
