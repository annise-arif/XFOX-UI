import React, { FC, useState } from "react";
import "./SingleProduct.css";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as DoorStep } from "../../assets/singlePageSvg/filterDoorStep.svg";
import { ReactComponent as Exclamatory } from "../../assets/singlePageSvg/filterlExclamatory.svg";
import { ReactComponent as Urgent } from "../../assets/singlePageSvg/filterUrgent.svg";
import { ReactComponent as BottomArrow } from "../../assets/singlePageSvg/bottomArrow.svg";
import { ReactComponent as TopArrow } from "../../assets/singlePageSvg/topArrow.svg";
import { ReactComponent as Mobile } from "../../assets/singlePageSvg/mobileIcon.svg";
import Collapse from "react-bootstrap/Collapse";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const mobileAccessories = [
  {
    accessoriesName: "Mobile Phones",
    quantity: "(87,624)",
  },
  {
    accessoriesName: "Mobile Phone Accessories",
    quantity: "(4,096)",
  },
  {
    accessoriesName: "Wearables",
    quantity: "(2,046)",
  },
  {
    accessoriesName: "SIM Cards",
    quantity: "(392)",
  },
  {
    accessoriesName: "Mobile Phone Services",
    quantity: "(49)",
  },
];

const locationName = [
  {
    locationName: "Dhaka",
    adQuantity: "(38,002)",
  },
  {
    locationName: "Dhaka Division",
    adQuantity: "(10,780)",
  },
  {
    locationName: "Chattogram",
    adQuantity: "(5,205)",
  },
  {
    locationName: "Khulna",
    adQuantity: "(5,187)",
  },
  {
    locationName: "Khulna Division",
    adQuantity: "(4,864)",
  },
  {
    locationName: "Rajshahi Division",
    adQuantity: "(4,824)",
  },
  {
    locationName: "Rnagpur",
    adQuantity: "(4,653)",
  },
];

const link = "Home >"
export const SingleProduct: FC = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  return (
    <Row>
      <Col lg={3} md={3} xs={12}>
        <Container className="mx-1 pt-3 border-end pb-1">
          {/* Sort result select-option*/}

          <div className="sorting">
            <p>
              <small className="sort">Sort results by</small>
            </p>
            <select
              className="form-select form-select-sm border-success rounded-0 outline-none mb-4"
              aria-label=".form-select-sm example"
            >
              <option selected>Date: Newest on top</option>
              <option value="1">Date: Oldest on top</option>
              <option value="2">Price: High to low</option>
              <option value="3">Price: Low to high</option>
            </select>
          </div>

          {/* Filter ads check-box*/}

          <div className="filter-product">
            <p className="filterPara">
              <small className="filter">Filter ads by</small>
            </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                <span className="doorStep">
                  <DoorStep /> <Exclamatory />
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
              />
              <label className="form-check-label" htmlFor="defaultCheck2">
                <span className="urgent">
                  <Urgent />
                </span>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck3"
              />
              <label className="form-check-label" htmlFor="defaultCheck3">
                <span className="featured">FEATURED</span>
              </label>
            </div>
          </div>

          {/* Type of poster select-option*/}

          <div className="typeOfPoster mt-4">
            <p>
              <small className="typeOfPoster">Type of poster</small>
            </p>
            <select
              className="form-select form-select-sm border-success rounded-0 outline-none mb-4"
              aria-label=".form-select-sm example"
            >
              <option selected>All</option>
              <option value="1">Members</option>
              <option value="2">Authorized dealers</option>
              <option value="3">None-members</option>
            </select>
          </div>

          {/* Category List collapse*/}
          <div className="categoryList">
            <div className="category-hr">
              <hr />
            </div>

            <p
              className="bg-white border-0"
              onClick={() => setCategoryOpen(!categoryOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={categoryOpen}
            >
              {categoryOpen ? (
                <>
                  <small className="category d-flex justify-content-between">
                    <span>Category</span> <TopArrow className="topArrow" />
                  </small>
                </>
              ) : (
                <>
                  <small className="category d-flex justify-content-between">
                    <span>Category</span>{" "}
                    <BottomArrow className="bottomArrow" />
                  </small>
                </>
              )}
            </p>

            <Collapse in={categoryOpen} className="mb-4">
              <div id="example-collapse-text">
                <h1 className="allCategories ms-2">All Categories</h1>
                <span className="mobile">
                  <Mobile /> <small>Mobiles</small>
                </span>
                <br />
                {mobileAccessories.map(
                  ({ accessoriesName, quantity }, index) => {
                    return (
                      <div className="my-2" key={index}>
                        <a href="#" className="accessoriesName">
                          {accessoriesName}{" "}
                          <span className="accessoriesquantity">
                            {quantity}
                          </span>
                          <br />
                        </a>
                      </div>
                    );
                  }
                )}
              </div>
            </Collapse>
          </div>

          {/* Location collapse */}

          <div className="location">
            <div className="locationHr">
              <hr />
            </div>
            
            <p
              className="bg-white border-0"
              onClick={() => setLocationOpen(!locationOpen)}
              aria-controls="example-collapse-text"
              aria-expanded={locationOpen}
            >
              {locationOpen ? (
                <>
                  <small className="category d-flex justify-content-between">
                    <span>Location</span> <TopArrow className="topArrow" />
                  </small>
                </>
              ) : (
                <>
                  <small className="category d-flex justify-content-between">
                    <span>Location</span>{" "}
                    <BottomArrow className="bottomArrow" />
                  </small>
                </>
              )}
            </p>

            <Collapse in={locationOpen} className="mb-4">
              <div id="example-collapse-text">
                <span className="allOfBangladesh"><small>All of Bangladesh</small>
                </span>
                <br />
                {locationName.slice(0, 5).map(
                  ({ locationName, adQuantity }, index) => {
                    return (
                      <div className="my-2" key={index}>
                        <a href="#" className="locationName">
                          {locationName}
                          <span className="accessoriesquantity ms-1">
                            {adQuantity}
                          </span>
                          <br />
                        </a>
                      </div>
                    );
                  }
                )}
              </div>
            </Collapse>

          </div>
        </Container>
      </Col>

      <Col lg={9} md={9} xs={12}>
        <Container>
          <div className="link">
            <p><span></span></p>
          </div>
        </Container>
      </Col>
    </Row>
  );
};
