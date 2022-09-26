import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { ReactComponent as GooglePlay } from "../../assets/svg/googlePlay.svg";
import { ReactComponent as AppStore } from "../../assets/svg/appStore.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";

const footerLinks = [
  {
    id: 1,
    title: "More from Xfox",
    link1: {
      link: "Sell Fast",
      hLink: "#",
    },
    link2: {
      link: "Doorstep Delivery",
      hLink: "#",
    },
    link3: {
      link: "Membership",
      hLink: "#",
    },
    link4: {
      link: "Banner Ads",
      hLink: "#",
    },
    link5: {
      link: "Ad Promotions",
      hLink: "#",
    },
    link6: {
      link: "Staffing solutions",
      hLink: "#",
    },
    link7: {
      link: "BikesGuide",
      hLink: "#",
    },
  },
  {
    id: 2,
    title: "Help & Support",
    link1: {
      link: "FAQ",
      hLink: "#",
    },
    link2: {
      link: "Stay safe",
      hLink: "#",
    },
    link3: {
      link: "Contact Us",
      hLink: "#",
    },
  },
  {
    id: 3,
    title: "Follow Xfox",
    link1: {
      link: "Blog",
      hLink: "#",
    },
    link2: {
      link: "Facebook",
      hLink: "#",
    },
    link3: {
      link: "Twitter",
      hLink: "#",
    },
    link4: {
      link: "Youtube",
      hLink: "#",
    },
  },
  {
    id: 4,
    title: "About Xfox",
    link1: {
      link: "About Us",
      hLink: "#",
    },
    link2: {
      link: "Careers",
      hLink: "#",
    },
    link3: {
      link: "Terms and Conditions",
      hLink: "#",
    },
    link4: {
      link: "Privacy policy",
      hLink: "#",
    },
    link5: {
      link: "Sitemap",
      hLink: "#",
    }
  },
];
export const Footer: FC = () => {
  return (
    <div>
      <div className="horizontalLine"></div>

      <Container>
        <Row>
          <Col lg={4} md={4} xs={12}>
            <h6>Download our app</h6>
            <div className="">
              <a href="#">
                <GooglePlay />
              </a>
              <a href="#">
                <AppStore className="mt-1" />
              </a>
            </div>
            <div className="my-4">
              <h6>Connect with</h6>
              <a className="anchorStyleFb fw-bold" href="#">
                <Facebook /> Linke us on facebook
              </a>
            </div>
            <div className="mt-4 mb-5">
              <h6>Other countries</h6>
              <a className="anchorStyle" href="#">
                <p>Sri Lanka</p>
              </a>
            </div>
          </Col>
          {footerLinks.map(({title, link1, link2, link3, link4, link5, link6, link7}, index) => {
            return (
              <Col lg={2} md={2} xs={12} key={index}>
                <h6 className="FooterTitleStyle">{title}</h6>
                <a className="FooteranchorStyle" href={link1.hLink}>{link1.link}</a><br />
                <a className="FooteranchorStyle" href={link2.hLink}>{link2.link}</a><br />
                <a className="FooteranchorStyle" href={link3.hLink}>{link3.link}</a><br />
                <a className="FooteranchorStyle" href={link4?.hLink}>{link4?.link}</a><br />
                <a className="FooteranchorStyle" href={link5?.hLink}>{link5?.link}</a><br />
                <a className="FooteranchorStyle" href={link6?.hLink}>{link6?.link}</a><br />
                <a className="FooteranchorStyle" href={link7?.hLink}>{link7?.link}</a>
              </Col>
            );
          })}

          <hr />
          <div className="copyright d-flex justify-content-between mb-5 mt-2">
          <small className="">Copyright &copy; Saltside Technologies</small>
            <h4 className="fw-bold"><span>Xfox.com</span></h4>
          </div>
        </Row>
      </Container>
    </div>
  );
};
