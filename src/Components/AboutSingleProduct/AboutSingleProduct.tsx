import React, { FC, useState } from "react";
import { Container } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import "./AboutSingleProduct.css";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import { ReactComponent as UpArrow } from "../../assets/svg/upArrow.svg";

export const AboutSingleProduct: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="aboutSingleProduct">
      <Container>
        <div className="aboutMain">
          <h6 className="aboutTitle">
            Find Mobile Phone and Accessories in Bangladesh
          </h6>
          <p className="aboutPara mb-0">
          With cutting-edge technology, the mobile phone revolution has completely changed the way personal communication used to take place in Bangladesh. When wireless mobile accessories are getting popular worldwide, 5G cellular technology is knocking at the door with thousands of new innovations. Mobile phones are being launched with more RAM capacities and wireless charging technology these days. As non-removable battery.
          </p>
        </div>

        <Collapse in={open}>
          <div id="example-collapse-text">
          <div className="aboutPara mt-0 pt-0 mb-3">technology is a common thing implemented for most mobile phones, users are looking for devices with higher backup potentiality. With easy purchasing experience find your mobile phone and accessories only at Xfox.com.</div>
            <h6 className="collapseAboutTitle">
            Filter by Price, Condition, Brand, Model
            </h6>
            <p className="aboutPara">
            Find the best mobile price in Bangladesh. On Bikroy.com you can narrow your searches by using filters like price, condition, brand, model, and others. Whether you are searching for a new or a used mobile phone, to get your preferred choice you can easily filter and meet your best deal over here.
            </p>{" "}
            
            <h6 className="collapseAboutTitle">
            Sell easily on Bikroy.com
            </h6>
            <p className="aboutPara">
            Selling is free, safe, and easy. On Bikroy.com, you can sell directly with other users, and cutting out the middleman which will lead you to get the best deal while selling. Selling on Bikroy.com is always free and you will get calls and messages from potential customers within a short period of time after posting your ad. Always follow our safety advice to make a sound deal.
            </p>
            
            <h6 className="collapseAboutTitle">
            Must Reads:
            </h6>
            <ul className="ulStyle">
              <li><a href="#">Tips on Buying Used Mobile Phones</a></li>
              <li><a href="#">Mobile Phone Prices in Bangladesh 2021</a></li>
              <li><a href="#">5 Official Budget Smartphones to Buy in 2021 under 10,000 BDT</a></li>
              <li><a href="#">Best Smartphones for Taking Photos</a></li>
              <li><a href="#">A guide to messaging apps on the iPhone</a></li>
              <li><a href="#">How to Sell Used Phones and Get the Best Deal on Bikroy.com!</a></li>
            </ul>
          </div>
        </Collapse>
        <button
          className="collapseBTN"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {open ? (
            <>
              <span>Show less</span>
              <span>
                <UpArrow className="upArrow" />
              </span>
            </>
          ) : (
            <>
              <span>Show more</span>
              <span>
                <DownArrow className="downArrow" />
              </span>
            </>
          )}
        </button>
      </Container>
    </div>
  );
};
