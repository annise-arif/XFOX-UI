import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { ReactComponent as GooglePlay } from "../../assets/svg/googlePlay.svg";
import { ReactComponent as AppStore } from "../../assets/svg/appStore.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import {footerLinks} from './Data';


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
            <h5 className="fw-bold"><span>Xfox.com</span></h5>
          </div>
        </Row>
      </Container>
    </div>
  );
};
