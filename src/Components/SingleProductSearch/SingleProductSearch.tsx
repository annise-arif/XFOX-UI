import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as LocationSvg } from "../../assets/singlePageSvg/location.svg";
import { ReactComponent as MobileSvg } from "../../assets/singlePageSvg/mobileCard.svg";
import "./SingleProductSearch.css";
import { ReactComponent as SinglePageSearchSvg } from "../../assets/singlePageSvg/searchIcon.svg";

export const SingleProductSearch: FC = () => {
  return (
    <Row>
      <Col lg={6} md={6} xs={12}>
        <Row>
          <Col lg={6}>
            <a href="#" className="text-decoration-none">
              <button className="location d-flex">
                <div className="locationSvg me-1">
                  <LocationSvg />
                </div>{" "}
                Select Location
              </button>
            </a>
          </Col>
          <Col lg={6}>
            <a href="#" className="text-decoration-none">
              <button className="mobileCard d-flex">
                <div className="mobileCard mb-2 me-2">
                  <MobileSvg />
                </div>{" "}
                Mobiles
              </button>
            </a>
          </Col>
        </Row>
      </Col>

      <Col lg={6} md={6} xs={12}>
        <form className="singlePageSearchBar">
          <input
            id="demo"
            className="singlePageSearchInput"
            type="text"
            placeholder="What are you looking for?"
          />
          <button className="SinglePageSearchSvg">
            <SinglePageSearchSvg />
          </button>
        </form>
      </Col>
    </Row>
  );
};
