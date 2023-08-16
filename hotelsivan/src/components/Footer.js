import React from "react";

import facebook from "../icons/facebook.png";
import twitter from "../icons/twitter.png";
import Instagram from "../icons/instagram.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <div className="sb_footer-links-div">
              <h4> For Business</h4>
              <a href="/employer">
                <p>Employer</p>
              </a>
              <a href="/Policy and Procedures">
                <p>Policy and Procedures </p>
              </a>
              <a href="/individual">
                <p>Individual</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4> Resources </h4>
              <a href="/resource">
                <p>Resource Center </p>
              </a>
              <a href="/testimonials">
                <p>Testimonials </p>
              </a>
              <a href="/STV">
                <p>S.T.V </p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Partners</h4>
              <a href="/swingtech">
                <p>Sivan Hotel</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h4>Company</h4>
              <a href="/about">
                <p>About</p>
              </a>
              <a href="/careers">
                <p>Careers</p>
              </a>
              <a href="/contact">
                <p>Contact</p>
              </a>
            </div>
            <div className="sb_footer-links div">
              <h4>Socials </h4>
              <div className="socialmedia">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <p>
                          <img src={facebook} alt="" />{" "}
                        </p>
                      </td>
                      <td>
                        <p>
                          <img src={twitter} alt="" />{" "}
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p>
                          <img src={Instagram} alt="" />{" "}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>
                @{new Date().getFullYear()} KgomotsoLouisaSeema . All rights
                Reserved.
              </p>
            </div>
            <div className="sb_footer_below-links">
              <a href="/terms">
                <div>
                  <p> Terms and Conditions</p>
                </div>
              </a>
              <a href="/privacy">
                <div>
                  <p> Privacy</p>
                </div>
              </a>
              <a href="/security">
                <div>
                  <p>Security</p>
                </div>
              </a>
              <a href="/cookies">
                <div>
                  <p> Cookies and Declaration </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
