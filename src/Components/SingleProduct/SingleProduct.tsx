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
import smasung from "../../assets/singleProductImg/badgedPhone/samsung.jpg";
import apple from "../../assets/singleProductImg/badgedPhone/apple.jpg";
import CommonImg from "../../assets/singleProductImg/xiaomiCommonImg.jpg";

import Pagination from "react-bootstrap/Pagination";
import { SingleProductCard } from "../SingleProductCard/SingleProductCard";
import { SingleBadgeProductCard } from "../SingleBadgeProductCard/SingleBadgeProductCard";


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

const badgeProductsData = [
  {
    id: 1,
    img: smasung,
    name: "Samsung Galaxy A51 . (Used)",
    location: "Barishal, Mobile Phones",
    price: "Tk 24,000",
  },
  {
    id: 2,
    img: apple,
    name: "Apple iPhone 11 Pro Max . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
  },
];
const productsData = [
  {
    img: CommonImg,
    name: "Xiaomi Redmi Note 10 Only sell (Used)",
    location: "Chattogram, Mobile Phones",
    price: "Tk 15,800",
    releaseTime: "just now",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "just now",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "1 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "2 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "9 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "7 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 11 Pro Max . (New)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "17 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "14 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (New)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "31 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "55 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (New)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "26 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "2 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (New)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "21 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "22 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (New)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "40 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "30 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "20 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (New)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "7 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "21 minutes",
  },
  {
    img: CommonImg,
    name: "Apple iPhone 6S . (Used)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "24 minutes",
  },
  {
    img: CommonImg,
    name: "Vivo Y21 . (New)",
    location: "Dhaka, Mobile Phones",
    price: "Tk 52,000",
    releaseTime: "58 minutes",
  },
];

type productProps = {
  productName: string | undefined;
};
export const SingleProduct: FC<productProps> = ({ productName }) => {
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

      <Col lg={9} md={9} xs={12} className="mb-5">
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
                  <b>{productName}</b>
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

          <Carousel
            nextIcon={
              <div>
                <CaroselRightArrow
                  style={{ maxHeight: "60px", marginRight: "-53px" }}
                />
              </div>
            }
            prevIcon={
              <div>
                <CaroselLeftArrow
                  style={{ maxHeight: "60px", marginLeft: "-584px" }}
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
              <Carousel.Caption className="Captions">
                <span>Mobile Shop Exchange Point</span>
                <h3>Apple iPhone 13. Pro Max 256GB GOLD (New) (Used)</h3>
                <p>Tk 131,000</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 Shadow"
                src="https://i.ibb.co/B6zV8fv/cropped-1.jpg"
                alt="Second slide"
              />

              <Carousel.Caption className="Captions">
                <span>Mobile Shop Exchange Point</span>
                <h3>OPPO A57 A57(4GB+64GB)(New)</h3>
                <p>Tk 4,899</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/S3jYBzn/cropped-3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption className="Captions">
                <span>dazzle</span>
                <h3>Apple iPhone 13 Pro Max 256gb Bh 100% (Used)</h3>
                <p>Tk 95,000</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>

          {/* Single Badge Products Card */}

         <SingleBadgeProductCard badgeProductsData={badgeProductsData}/>

          {/* Single Products Card */}
      
         <SingleProductCard productsData={productsData}/>

          {/* Pagination */}

          <Pagination className="mt-5 ms-5 ps-5 d-flex">
            <Pagination.Prev className="ms-5 ps-5"/>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
          </Pagination>

        </Container>
      </Col>
    </Row>
  
  );
};
