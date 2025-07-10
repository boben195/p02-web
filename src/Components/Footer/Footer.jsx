import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="footer name">
            <h2>ShopX</h2>
          </div>
          <div className="footer_socials">
            <FaFacebook className="footer_icon" />
            <BsInstagram className="footer_icon" />
            <BsTwitterX className="footer_icon" />
          </div>
        </div>
        <div className="footer-copy">
          <p>Copyright and bla bla bla</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
