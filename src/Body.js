/** @format */

import React from "react";
import "./Body.css";
import section1img from "./IMAGES/illustration-hero.svg";
import section2img from "./IMAGES/illustration-features-tab-1.svg";
import chromeimg from "./IMAGES/logo-chrome.svg";
import dot from "./IMAGES/bg-dots.svg";
import firefoximg from "./IMAGES/logo-firefox.svg";
import operaimg from "./IMAGES/logo-opera.svg";
import { Accordion } from "react-bootstrap";
const Body = () => {
  return (
    <div>
      <div className='div1'>
        <div className='sec1'>
          <div className='Bluebag'></div>
          <img className='illustrationh' src={section1img} alt='' />
        </div>
        <div className='div1i'>
          <h1 className='header1'>A Simple Bookmark Manger</h1>
          <p className='pg1'>
            <b>
              A clean and simple interface to organize your favourite website.
              Open a new browser tab and see your site load instantly. Try it
              for free
            </b>
          </p>
          <div className='sectionbtn'>
            <button className='sectionbtn1'>Get it on Chrome</button>
            <button className='sectionbtn2'>Get it on Firefox</button>
          </div>
        </div>
      </div>

      <h2 className='header2'>Features</h2>
      <p className='pg2'>
        <b>
          Our aim is to make it quick and easy for you to access your favourite
          websites. your bookmarks sync between your devices so you can access
          them on the go
        </b>
      </p>
      <div className='header3div'>
        <h4>
          <a href='' className='header3'>
            Simple Bookmarking
          </a>
        </h4>
        <hr />
        <h4>
          <a href='' className='header3i'>
            Speedy Searching
          </a>
        </h4>
        <hr />
        <h4>
          <a href='' className='header3ii'>
            Easy Sharing
          </a>
        </h4>
        <hr />
      </div>

      {/* second section */}
      <div className='div2'>
        <div className='sec2'>
          <div className='Bluebag2'></div>
          <img className='illustrationtab1' src={section2img} alt='' />
        </div>
        <div className='header3'>
          <h3>
            <b>Bookmark in one click</b>
          </h3>
          <p className='pg3'>
            Organnize your bookmark however you like. Our simple drag - and
            -drop interface gives you complete control over how you manage your
            favourite sites
          </p>
          <div className='sectionbtn2ii'>
            <button className='sectionbtn2i'>More Info</button>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className='sec3'>
        <h3>
          <b>Download the extension</b>
        </h3>
        <p className='pg4'>
          We've got more browser in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize
        </p>
      </div>
      {/* section4 the browsing icons */}
      <div>
        <div className='div3'>
          <div className='chromediv'>
            <div className='chromebag'>
              <div className='chrome'>
                <img className='chromeimg' src={chromeimg} alt='' />
                <h1>Add to Chrome</h1>
                <p>Minimum version 62</p>
                <img className='dotbag' src={dot} alt='dot' />
                <button className='chromebtn'>Add & install Extension</button>
              </div>
            </div>
          </div>
          <div>
            <div className='firefoxbag'>
              <div className='firefoxicon'>
                <img className='fireimg' src={firefoximg} alt='' />
                <h1>Add to Chrome</h1>
                <p>Minimum version 55</p>
                <img className='dotbag' src={dot} alt='dot' />
                <button className='chromebtn'>Add & install Extension</button>
              </div>
            </div>
          </div>
          <div>
            <div className='operabag'>
              <div className='operaicon'>
                <img className='operaimg' src={operaimg} />
                <h1>Add to Chrome</h1>
                <p>Minimum version 55</p>
                <img className='dotbag' src={dot} alt='dot' />
                <button className='operabtn'>Add & install Extension</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section5 */}
      <div className='section5'>
        <h3>Frequently Asked Questions</h3>
        <p className='pg5'>
          Here are some of pur FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
        <div className='accordion'>
          <Accordion>
            <Accordion.Item eventKey='0'>
              <Accordion.Header className='accord'>
                What is BookMark ?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header className='accord'>
                How can i request a new browser?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header className='accord'>
                Is there a Mobile app?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header className='accord'>
                Waht about chromium browser?{" "}
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className='section5btnbag'>
          <button className='section5btn'>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
