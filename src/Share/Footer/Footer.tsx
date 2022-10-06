import React, { FC, Fragment } from "react";
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
            <h6 className="FooterAppTitle">Download our app</h6>
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
                <Facebook /> Like us on facebook
              </a>
            </div>
            <div className="mt-4 mb-5">
              <h6>Other countries</h6>
              <a className="anchorStyle" href="#">
                <p>Sri Lanka</p>
              </a>
            </div>
          </Col>
          {footerLinks.map(({title, links}, index) => {
            return (
              <Col lg={2} md={2} xs={12} key={index}>
                <h6 className="FooterTitleStyle">{title}</h6>
                {
                    links.map((link, i)=>(
                      <Fragment key={i}>
                        <a className="FooteranchorStyle" href={link.hLink}>{link.link}</a>
                        <br />
                      </Fragment>
                    ))
                }
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
