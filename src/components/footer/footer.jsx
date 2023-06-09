import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="main-address-container">
        <h2 className="address-heading">
          Our Address:
        </h2>
        <address>
          27, Daulat bagh <br />
          Near meraj wali masjid, <br />
          Moradabad, <br />
          Uttar Pradesh <br />
        </address>
      </div>
      <div className="social-icon-container">
        <h3 className="social-icon-heading">Connect with us on: </h3>

        <img className="social-icon" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" width="30px" alt="" />
        <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" width="30px" alt="" />
        <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" width="30px" alt="" />

        <img src="" width="30px" alt="" />
      </div>
      <div className="copyright-container">
        <h3 className="footer-heading">Blog © 2023</h3>
      </div>

    </footer>
  );
}

export default Footer;
