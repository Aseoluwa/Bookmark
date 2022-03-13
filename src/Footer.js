/** @format */

import React from "react";
import "./Footer.css";
import Bookmarklogo from "./IMAGES/logo-bookmark.svg";
import fblogo from "./IMAGES/icon-facebook.svg";
import twlogo from "./IMAGES/icon-twitter.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div className='footerbag1'>
          <p>35,000 + ALREADY JOINED</p>
          <h2>Stay up-to-date with what we're doing</h2>
          <div className='sectionbtn'>
            <div className='inputdiv'>
              <input
                className='input'
                type='text'
                placeholder='Enter email address'
              />
            </div>
            <div className='buttondiv'>
              <button className='button'>Contact us</button>
            </div>
          </div>
        </div>

        <div className='section2'>
          <div>
            <img className='logo' src={Bookmarklogo} />
          </div>
          <div className='sectionimgandtextdiv'>
            <div className='p1'>
              <p>FEATURES</p>
            </div>
            <div className='p2'>
              <p>PRICING</p>
            </div>
            <div className='p3'>
              <p>CONTACT</p>
            </div>
          </div>
          <div className='logodiv'>
            <a href='' className='fb1'>
              <img className='fb' src={fblogo} />
            </a>
            <img className='tw' src={twlogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
