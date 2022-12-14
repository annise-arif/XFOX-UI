import { FC, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import Carousel from "react-bootstrap/Carousel";
import { ReactComponent as BottomArrow } from "../../assets/singlePageSvg/bottomArrow.svg";
import { ReactComponent as DoorStep } from "../../assets/singlePageSvg/filterDoorStep.svg";
import { ReactComponent as Exclamatory } from "../../assets/singlePageSvg/filterlExclamatory.svg";
import { ReactComponent as Urgent } from "../../assets/singlePageSvg/filterUrgent.svg";
import { ReactComponent as Mobile } from "../../assets/singlePageSvg/mobileIcon.svg";
import { ReactComponent as RightLinkArrow } from "../../assets/singlePageSvg/rightLinkArrow.svg";
import { ReactComponent as TopArrow } from "../../assets/singlePageSvg/topArrow.svg";
import { ReactComponent as CaroselLeftArrow } from "../../assets/singlePageSvg/CaroselLeftArrow.svg";
import { ReactComponent as CaroselRightArrow } from "../../assets/singlePageSvg/CaroselRightArrow.svg";
import "./SingleProduct.css";
import { SingleProductCard } from "../SingleProductCard/SingleProductCard";
import { SingleBadgeProductCard } from "../SingleBadgeProductCard/SingleBadgeProductCard";
import {mobileAccessories} from "./mobileAccessoriesData";
import {locationName} from "./locationNameData";
import {badgeProductsData} from "./badgeProductsData";
import {productsData} from "./productsData";
import {ReactComponent as LeftSvg} from "../../assets/PaginationSvg/leftSvg.svg";
import {ReactComponent as RightSvg} from "../../assets/PaginationSvg/rightSvg.svg";


type productProps = {
  categoryName: string | undefined;
};

export const SingleProduct: FC<productProps> = ({ categoryName }) => {
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
                <span className="allOfBangladesh">
                  <small>All of Bangladesh</small>
                </span>
                <br />
                {locationName
                  .slice(0, 5)
                  .map(({ locationName, adQuantity }, index) => {
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
                  })}
              </div>
            </Collapse>
          </div>
        </Container>
      </Col>

      <Col lg={9} md={9} xs={12} className="mb-3">
        <Container>
          <div className="links">
            <ul className="d-flex gap-1">
              {[
                { link: "Home", hLink: "/" },
                { link: "All ads", hLink: "/" },
              ].map(({ link, hLink }, i) => {
                return (
                  <li key={i} className="LinkStyle">
                    <a className="text-decoration-none" href={hLink}>
                      <span>
                        {link} <RightLinkArrow />
                      </span>
                    </a>
                  </li>
                );
              })}
              <li className="LinkStyle">
                <a className="text-decoration-none" href="#">
                  <b>{categoryName}</b>
                </a>
              </li>
            </ul>
          </div>

          {/* Product Name and ads */}

          <div className="Product-name">
            <h1>Mobiles Phones and Accessories for Sale in Bangladesh</h1>
            <p>Showing 1-25 of 94,362 ads</p>
          </div>

          {/* Products Slider */}

          <Carousel nextIcon={
              <div>
                <CaroselRightArrow
                  style={{ maxHeight: "2.875rem", marginRight: "-3.875rem" }}
                />
              </div>
            }
            prevIcon={
              <div>
                <CaroselLeftArrow
                  style={{maxHeight: "2.875rem", marginLeft: "-37.25rem",}}
                />
              </div>
            }
            style={{
              maxHeight: "auto",
              maxWidth: "630px",
              borderRadius: "50px",
            }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100 Shadow"
                src="https://i.ibb.co/VJgVBxY/cropped.jpg"
                alt="First slide"
              />
              <Carousel.Caption className="CaptionsBg">
                <div className="Captions">
                <span>Mobile Shop Exchange Point</span>
                <h3>Apple iPhone 13. Pro Max 256GB GOLD (New) (Used)</h3>
                <p>Tk 131,000</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 Shadow"
                src="https://i.ibb.co/B6zV8fv/cropped-1.jpg"
                alt="Second slide"
              />

              <Carousel.Caption className="CaptionsBg">
                <div className="Captions">
                <span>Mobile Shop Exchange Point</span>
                <h3>OPPO A57 A57(4GB+64GB)(New)</h3>
                <p>Tk 4,899</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/S3jYBzn/cropped-3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption className="CaptionsBg">
                <div className="Captions">
                <span>dazzle</span>
                <h3>Apple iPhone 13 Pro Max 256gb Bh 100% (Used)</h3>
                <p>Tk 95,000</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>

          {/* Single Badge Products Card */}

         <SingleBadgeProductCard badgeProductsData={badgeProductsData}/>

          {/* Single Products Card */}
      
         <SingleProductCard productsData={productsData}/>

          {/* Pagination */}

          <div className="pagination">
            <a className="me-5" href="#"><LeftSvg className="mb-1" />  <span className="prev ms-2">Previous</span></a>

                <a className="active number" href="#">1</a>
                <a className="number" href="#">2</a>
                <a className="number" href="#">3</a>
                <a className="number" href="#">4</a>
                <a className="number" href="#">5</a>
                <a className="number" href="#"><b>...</b></a>

            <a className="ms-5" href="#">  <span className="next me-2">Next</span>   <RightSvg  className="mb-1"/></a>
          </div>

        </Container>
      </Col>
    </Row>
  
  );
};
