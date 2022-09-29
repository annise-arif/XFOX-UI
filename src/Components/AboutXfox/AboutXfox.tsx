import React, { FC, useState } from "react";
import { Container } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import "./AboutXfox.css";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import { ReactComponent as UpArrow } from "../../assets/svg/upArrow.svg";

export const AboutXfox: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <div className="aboutXfox">
        <h6 className="aboutTitle">
          About Xfox.com, The Largest Marketplace in Bangladesh!
        </h6>
        <p className="aboutPara">
          Xfox is a platform on which you can buy and sell almost everything! We
          help people buy and sell vehicles, find properties, get jobs or
          recruit employees, buy and sell mobile phones, purchase electronic
          products, and much more. With more than 50 categories our solutions
          are built to be safe, smart, and convenient for our customers.
        </p>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <h6 className="collapseAboutTitle">Buy, Sell, Rent, or Find Jobs in Bangladesh</h6>
          <p className="aboutPara">
            Every month, hundreds of millions of people use Xfox to find and
            sell mobiles, musical instruments, cars, houses, jobs, and more
            through classified ads. To sell new items or sell used items
            quickly, Xfox offers Ad Promotion features. </p> <p> Xfox.com has an
            extensive collection of new and used goods, making it easier for
            users to quickly buy new items or buy used items at their desired
            location. To buy online, users easily can reach their desired
            products through filtering options. </p><p> Doorstep Delivery is the
            e-commerce service of Xfox.com, serving necessary appliances with
            a 100% guarantee of safety and saving valuable time for buyers and
            sellers in online shopping. </p><p> For businesses, Xfox.com has
            introduced the ‘Membership’ service, which helps them expand their
            businesses online. Members will have their virtual shop with a
            Xfox URL with free promotions of their goods. With different
            membership categories, businesses can flourish as verified members
            and authorized dealers. </p><p> With millions of unique monthly visitors,
            thousands of interested buyers, and thousands of active dealers on
            our platform, Xfox.com is the Largest Marketplace in Bangladesh.
          </p>
          <h6 className="collapseAboutTitle">Benefits of Trading at Xfox.com</h6>
          <p className="aboutPara">
          At Xfox, we make it so easy to connect people to buy, sell or rent goods and services as other classified sites. </p><p> - Fast & Easy Experience: Navigated buying and selling experience in Bangladesh which is simpler, faster, and easier. Shop and sell on the go and get your desired products in just a few clicks. </p><p> - Post Ads Free: As a free classified website, we offer free ad posting features in many categories for the convenience of the users based on their locations. </p><p> - Safe & Secure Shopping: We have listed our verified members and authorized dealers to create a safe shopping experience for our users.
          </p>
        </div>
      </Collapse>
      <button
        className="collapsBtn"
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
  );
};
