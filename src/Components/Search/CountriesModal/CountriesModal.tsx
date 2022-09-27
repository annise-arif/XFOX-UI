import React, { FC, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ReactComponent as RightArrowForSearchCountry } from "../../../assets/svg/rightArrowForSearchCountry.svg";
import { CountriesData } from "./CountriesData";
import { DivisionsData } from "./DivisionsData";

type LoginModalProps = {
  show: boolean;
  onHide: () => void;
};

export const CountriesModal: FC<LoginModalProps> = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Row className="p-4">
        <Modal.Header closeButton className="border-bottom-0 my-0 py-0 pe-2 " />
        <Col lg={6} md={6} xs={12} className="ps-4 mb-3">
          <h6 className="fw-bold mb-3">Select City or Division</h6>
          <p className="mb-4">
            <a className="text-decoration-none fw-light">All of Bangladesh</a>
          </p>
          <hr className="text-muted" />
          <span className="text-muted">Cities</span>

          {CountriesData.map((country, index) => {
            return (
              <Fragment key={index}>
                <a
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{country.Country}</small>
                  <RightArrowForSearchCountry />
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}

          <p className="mt-5"><span className="text-muted">Divisions</span></p>

          {DivisionsData.map((division, index) => {
            return (
              <Fragment key={index}>
                <a
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{division.Division}</small>
                  <RightArrowForSearchCountry />
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}

        </Col>

        <Col lg={12} md={12} xs={12} className="ps-4 mb-3"></Col>
      </Row>
    </Modal>
  );
};
