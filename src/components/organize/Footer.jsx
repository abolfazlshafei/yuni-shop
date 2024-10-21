import React from "react";
import LinkMol from "../molecule/Link.Mol";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import "./footer.css";
function Footer() {
  return (
    <div className="footer ">
      <div className="footer-nav">
        <FaLocationDot />
        <p className="location">
          آدرس: تهران — بالاتر از میدان منیریه – شماره 955
        </p>
      </div>
      <div className="footer-call">
        <IoCallOutline />
        <p className="call">تماس: ۶۶۴۵۶۰۶۵ – ۰۲۱ (پاسخگویی 10 صبح الی 17)</p>
      </div>

      <div className="footer-email">
        <HiOutlineMailOpen />
        <p className="email">info@takrazm.com</p>
      </div>

      <div className="power">
        <LinkMol />
      </div>
    </div>
  );
}

export default Footer;
