import React, { FC, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Header } from "../../Share/Header/Header";
import { ReactComponent as RightLinkArrow } from "../../assets/singlePageSvg/rightLinkArrow.svg";
import { ReactComponent as ShareSvg } from "../../assets/DetailsPageSvg/shareIcon.svg";
import { ReactComponent as StarSvg } from "../../assets/DetailsPageSvg/star.svg";
import "./SingleProductDetails.css";
import { topLinkData } from "./topLinkData";
import mainImg from "../../assets/DetailsPageImg/fitted.jpg";
import Modal from "react-bootstrap/Modal";
import { ReactComponent as FullScreenSvg } from "../../assets/DetailsPageSvg/fullScreen.svg";
import croppedImg1 from "../../assets/DetailsPageImg/cropped1.jpg";
import croppedImg2 from "../../assets/DetailsPageImg/cropped2.jpg";
import croppedImg3 from "../../assets/DetailsPageImg/cropped3.jpg";
import croppedImg4 from "../../assets/DetailsPageImg/cropped4.jpg";
import { ReactComponent as Promote } from "../../assets/DetailsPageSvg/promote.svg";
import { ReactComponent as Report } from "../../assets/DetailsPageSvg/report.svg";
import { SinglePageHeader } from "../../Components/SinglePageHeader/SinglePageHeader";
import { SPPFData } from "./SingleProductDetailsFooterData";
import { SingleProductpageFooter } from "../../Share/SingleProductpageFooter/SingleProductpageFooter";
import Carousel from "react-bootstrap/Carousel";
import { Footer } from "../../Share/Footer/Footer";

const croppedImgData = [
  mainImg,
  croppedImg1,
  croppedImg2,
  croppedImg3,
  croppedImg4,
];
export const SingleProductDetails: FC = () => {
  const { name, id } = useParams();

  const [image, setImage] = useState(mainImg);

  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  const handleImage = (img: string) => {
    setImage(img);
  };

  return (
    <div className="productDetailsPage">
      <Header />
      <div className="SinglePagebody">
        <Container>
          {/* Links */}

          <div className="links">
            <ul className="d-flex flex-wrap gap-1">
              {topLinkData.map(({ link, hLink }, i) => {
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
                  <b>{name}</b>
                </a>
              </li>
            </ul>
          </div>

          {/* Main Start*/}
          <div className="main">
            {/* Product Details */}
            <div className="productDetails">
              <Row>
                <Col lg={8}>
                  {/* Details */}
                  <div className="detail-3nl">
                    <h1 className="productName">{name}</h1>
                    <span className="postLocation-and-time">
                      Posted on 07 Oct 7:05 pm, Sonadanga, Khulna
                    </span>
                  </div>

                  {/* Single Image gallery */}
                  <div className="galery-wrapper">
                    <div className="gallery">
                      <button
                        style={{ width: "52rem", maxHeight: "29.063rem" }}
                        className="main-img-container mt-3 img-fluid"
                        onClick={handleShow}
                      >
                        <div className="fullScreenSvg">
                          <FullScreenSvg />
                        </div>
                        <img className="img-fluid" src={image} alt="" />
                      </button>
                    </div>

                    <div className="thumbnile-container">
                      <ul className="thumbnileImg gap-3">
                        {croppedImgData.map((img, index) => {
                          return (
                            <li onClick={() => handleImage(img)} key={index}>
                              <img
                                className="croppedImage"
                                src={img}
                                alt=""
                                style={{ height: "80px", width: "100px" }}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* image modal */}
                  <Modal
                    animation={false}
                    fullscreen
                    className="modal-full-image"
                    show={show}
                    onHide={() => setShow(false)}
                  >
                    <Modal.Body className="modal-full-image">
                      <Modal.Header
                        closeButton
                        closeVariant="white"
                        className="closeButton"
                      />
                      <div className="modal-image">
                        <img
                          className="img-fluid"
                          src={image}
                          alt="img"
                          style={{ height: "720", width: "865px" }}
                        />
                        
                      </div>
                      <div className="cropped-thumbnile d-flex d-flex justify-content-center mt-5 pt-4">
                        <ul className="thumbnileImg gap-3 ps-0 ms-0">
                          {croppedImgData.map((img, index) => {
                            return (
                              <li onClick={() => handleImage(img)} key={index}>
                                <img
                                  className="croppedImage"
                                  src={img}
                                  alt=""
                                  style={{ height: "80px", width: "100px" }}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </Modal.Body>
                  </Modal>

                  {/* Product Price and Features */}

                  <div className="features-condition-and-price">
                    <h1 className="price">Tk 17,000</h1>
                    <Row className="condition-and-brand">
                      <Col lg={6} className="condition">
                        <p>
                          Condition: <span>Used</span>
                        </p>
                        <p>
                          Model: <span>Galaxy M32</span>
                        </p>
                        <p>
                          Authenticity: <span>Original</span>
                        </p>
                      </Col>
                      <Col lg={6} className="brand">
                        <p>
                          Brand: <span>Samsung</span>
                        </p>
                        <p>Edition: good</p>
                      </Col>
                    </Row>
                    <div className="features">
                      <h2 className="features-heading">Features</h2>
                      <p>3G, 4G</p>
                    </div>
                    <div className="description">
                      <h2 className="features-heading">Description</h2>
                      <p>
                        fon..100% friesh..condeson...not a siengal
                        problem...😍😍camra kinbo ty basbo...dam fiext
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="share-and-save-link">
                    <button className="shareButton">
                      <ShareSvg />
                      <span className="">Share</span>
                    </button>
                    <button className="shareButton">
                      <StarSvg />
                      <span className="">Share</span>
                    </button>
                  </div>
                </Col>
                <div className="horizontal-line">
                  <hr />
                </div>
                <div className="promote-add-and-report-btn">
                  <button className="Promote">
                    <Promote /> <span className="ms-1">Promote this ad</span>
                  </button>
                  <button className="Report">
                    <Report /> <span>Report this ad</span>
                  </button>
                </div>
              </Row>
            </div>
          </div>
          {/* Main End */}

          {/* Single Page header start */}
          <div className="singlePageHeader pt-4 pb-3 mx-0 px-0">
            <SinglePageHeader />
          </div>
          {/* Single Page header end */}

          {/* Similar ads start*/}
          <div className="main similarAds productDetails">
            <h3 className="similar-ads-heading">Similar ads</h3>
            <div className="horizontal-line">
              <hr />
            </div>

            {/* slider start */}
            <Carousel slide={false} variant="">

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/BrmSfZD/964323-untitled-design-57.jpg"
                  alt="First slide"
                />
                 <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                 </Carousel.Caption>
              </Carousel.Item>

              {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/BrmSfZD/964323-untitled-design-57.jpg"
                  alt="Second slide"
                />

              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/BrmSfZD/964323-untitled-design-57.jpg"
                  alt="Third slide"
                />
              </Carousel.Item> */}

            </Carousel>
            {/* slider end */}
          </div>
          {/* Similar ads end*/}
        </Container>
      </div>

      {/* Product Details Page Footer start*/}
      <div className="ProductDetailsFooter">
        <SingleProductpageFooter SPPFData={SPPFData} />
      </div>
      {/* Product Details Page Footer end*/}

      {/* Main Footer start*/}
      <Footer />
      {/* Main Footer end*/}
    </div>
  );
};
