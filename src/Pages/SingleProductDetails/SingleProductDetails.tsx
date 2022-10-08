import React, { FC, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
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
import {ReactComponent as PrevSvg} from "../../assets/DetailsPageSvg/prevSvg.svg";
import {ReactComponent as NextSvg} from "../../assets/DetailsPageSvg/nextSvg.svg";
import {relatedProductsData} from "./RelatedProductsData";
import { Footer } from "../../Share/Footer/Footer";
import { RelatedProductCard } from "../../Components/RelatedProduct/RelatedProductCard";
import {ReactComponent as CallSvg} from "../../assets/DetailsPageSvg/callSvg.svg";
import {ReactComponent as MessageSvg} from "../../assets/DetailsPageSvg/messageSvg.svg";
import {ReactComponent as SafetySvg} from "../../assets/DetailsPageSvg/safetySvg.svg";
import {ReactComponent as Whatsapp} from "../../assets/DetailsPageSvg/whatsapp.svg";
import {ReactComponent as Twitter} from "../../assets/DetailsPageSvg/twitter.svg";
import {ReactComponent as Facebook} from "../../assets/DetailsPageSvg/facebook.svg";
import {ReactComponent as Email} from "../../assets/DetailsPageSvg/email.svg";
import {ReactComponent as Copy} from "../../assets/DetailsPageSvg/copy.svg";

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
                        <img className="img-fluid mainGalaryImage" src={image} alt="" />
                      </button>
                    </div>

                    <div className="thumbnile-container">
                      <ul className="thumbnileImg gap-3">
                        {croppedImgData.map((img, index) => {
                          return (
                            <li onClick={() => handleImage(img)} key={index} >
                              <img
                                className={`croppedImage${img === image ? " active": ""}` }
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
                                  className={`croppedImage${img === image ? " active": ""}` }
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
                    <div className="socialLink position-absolute">
                      <Link className="d-flex gap-2 align-items-center" style={{textDecoration: "none"}} to="https://whatsapp.com"> <Whatsapp /> <span className="whatsapp">Whatsapp</span></Link>
                      <Link className="d-flex gap-2 align-items-center" style={{textDecoration: "none"}} to="https://facebook.com"> <Facebook /> <span className="facebook">Facebook</span></Link>
                      <Link className="d-flex gap-2 align-items-center" style={{textDecoration: "none"}} to="https://twitter.com"> <Twitter /> <span className="twitter">Twitter</span></Link>
                      <Link className="d-flex gap-2 align-items-center" style={{textDecoration: "none"}} to="https://email.com"> <Email /> <span className="email">Email</span></Link>
                      <Link className="d-flex gap-2 align-items-center" style={{textDecoration: "none"}} to=""> <Copy /> <span className="copyLink">Copy Link</span></Link>
                    
                    </div>
                    <button className="shareButton">
                      <ShareSvg />
                      <span className="">Share</span>
                    </button>
                    
                    <button className="shareButton">
                      <StarSvg />
                      <span className="">Save ad</span>
                    </button>

                  </div>

                  {/* For Sale By and Safety section start */}
                  <div className="for-sale-info-section">
                  <div className="for-sale">
                    <p className="for-sale-by"><span>For sale by</span> <b className="seller-text">Seller</b></p>
                    <p className="contact-number d-flex border-top">
                      <CallSvg className="callSvg"/>
                      <Link to="" className="number">
                        <p><b>01971XXXXXX</b></p>
                        <small>Click to show phone number</small>
                      </Link>
                    </p>
                    <p className="chat border-top"><MessageSvg /> <b>Chat</b></p>
                  </div>

                  {/* safety section start */}
                  <div className="safety-tips">
                    <h3><SafetySvg /> <b>Safety tips</b></h3>
                    <ul className="safety-list">
                      {
                        ["Avoid offers that look unrealistic", "Chat with seller to clarify item details", "Meet in asafe & public place", "Check the item before buying it", "Don't pay in advance"].map((item, i) => <li key={i}><small>{item}</small></li>)
                      }
                    </ul>
                    <a className="see-all-safety-tips-link" target="blank" href="https://google.com">See all safety tips</a>
                  </div>
                  </div>
                  {/* safety section end */}
                  {/* For Sale By and Safety section end */}
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
          <div className="main similarAds productDetails pb-2">
            <h3 className="similar-ads-heading">Similar ads</h3>
            <div className="horizontal-line">
              <hr />
            </div>

            {/* slider start */}
            <Carousel indicators={true} slide={false} prevIcon={
              <div className="PrevSvg"><PrevSvg /></div>
            } nextIcon={<div className="NextSvg"><NextSvg /></div>}>

              <Carousel.Item style={{height: "17rem"}}>
                <RelatedProductCard relatedProductsData={relatedProductsData.slice(0, 2)}/>
                <RelatedProductCard relatedProductsData={relatedProductsData.slice(2, 4)}/>
              </Carousel.Item>

              <Carousel.Item style={{height: "17rem"}}>
                <RelatedProductCard relatedProductsData={relatedProductsData.slice(4, 6)}/>
                <RelatedProductCard relatedProductsData={relatedProductsData.slice(6, 8)}/>
              </Carousel.Item>

              <Carousel.Item style={{height: "17rem"}}>
                <RelatedProductCard relatedProductsData={relatedProductsData.slice(8, 10)}/>
                <RelatedProductCard relatedProductsData={relatedProductsData.slice(10, 12)}/>
              </Carousel.Item>

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
