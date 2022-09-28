import React, { FC, Fragment, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ReactComponent as RightArrowForSearchCountry } from "../../../assets/svg/rightArrowForSearchCountry.svg";
import { CountriesData } from "./CountriesData";
import { DivisionsData } from "./DivisionsData";

import { AllOfBarishal } from "./PopularArea/AllOfBarishal";
import { AllOfChattogram } from "./PopularArea/AllOfChattogram";
import { AllOfDhaka } from "./PopularArea/AllOfDhaka";
import { AllOfKhulna } from "./PopularArea/AllOfKhulna";
import { AllOfMymensingh } from "./PopularArea/AllOfMymensingh";
import { AllOfRajshahi } from "./PopularArea/AllOfRajshahi";
import { AllOfRangpur } from "./PopularArea/AllOfRangpur";
import { AllOfSylhet } from "./PopularArea/AllOfSylhet";
import { BarishalDivision } from "./PopularAreaDivisions/BarishalDivision";

import { ChattogramDivision } from "./PopularAreaDivisions/ChattogramDivision";
import { DhakaDivision } from "./PopularAreaDivisions/DhakaDivision";
import { KhulnaDivision } from "./PopularAreaDivisions/KhulnaDivision";
import { MymensinghDivision } from "./PopularAreaDivisions/MymensinghDivision";
import { RajshahiDivision } from "./PopularAreaDivisions/RajshahiDivision";
import { RangpurDivision } from "./PopularAreaDivisions/RangpurDivision";
import { SylhetDivision } from "./PopularAreaDivisions/SylhetDivision";



type LoginModalProps = {
  show: boolean;
  onHide: () => void;
};

export const CountriesModal: FC<LoginModalProps> = ({ show, onHide }) => {
  const [activeCountryTab, setActiveCountrytab] = useState('');
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
            <a className="text-decoration-none fw-light" href="/">All of Bangladesh</a>
          </p>
          <hr className="text-muted" />
          <span className="text-muted">Cities</span>

          {CountriesData.map(({Country}, index) => {
            return (
              <Fragment key={index}>
                <a
                  onClick={()=> setActiveCountrytab(Country)}
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{Country}</small>
                  <RightArrowForSearchCountry />
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}

          <p className="mt-5"><span className="text-muted">Divisions</span></p>

          {DivisionsData.map(({Division}, index) => {
            return (
              <Fragment key={index}>
                <a
                  onClick={()=> setActiveCountrytab(Division)}
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{Division}</small>
                  <RightArrowForSearchCountry />
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}

        </Col>

        <Col lg={6} md={6} xs={12} className="ps-4 mb-3">

        {activeCountryTab === 'Dhaka' && <AllOfDhaka />}
        {activeCountryTab === 'Chattogram' && <AllOfChattogram />}
        {activeCountryTab === 'Sylhet' && <AllOfSylhet />}
        {activeCountryTab === 'Khulna' && <AllOfKhulna />}
        {activeCountryTab === 'Barishal' && <AllOfBarishal />}
        {activeCountryTab === 'Rajshahi' && <AllOfRajshahi />}
        {activeCountryTab === 'Rangpur' && <AllOfRangpur />}
        {activeCountryTab === 'Mymensingh' && <AllOfMymensingh />}

      {/* Divisions */}
        
        {activeCountryTab === 'Dhaka Division' && <DhakaDivision />}
        {activeCountryTab === 'Chattogram Division' && <ChattogramDivision />}
        {activeCountryTab === 'Sylhet Division' && <SylhetDivision />}
        {activeCountryTab === 'Khulna Division' && <KhulnaDivision />}        
        {activeCountryTab === 'Rajshahi Division' && <RajshahiDivision />}        
        {activeCountryTab === 'Rangpur Division' && <RangpurDivision />}        
        {activeCountryTab === 'Barishal Division' && <BarishalDivision />}        
        {activeCountryTab === 'Mymensingh Division' && <MymensinghDivision />}        


        </Col>
      </Row>
    </Modal>
  );
};
