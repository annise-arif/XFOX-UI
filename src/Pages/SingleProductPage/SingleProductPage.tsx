import { FC } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SinglePageHeader } from "../../Components/SinglePageHeader/SinglePageHeader";
import { Footer } from "../../Share/Footer/Footer";
import { Header } from "../../Share/Header/Header";
import "./SingleProductPage.css";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";
import { SingleProductSearch } from "../../Components/SingleProductSearch/SingleProductSearch";
import { SingleProductpageFooter } from "../../Share/SingleProductpageFooter/SingleProductpageFooter";
import { AboutSingleProduct } from "../../Components/AboutSingleProduct/AboutSingleProduct";
import {SPPFData} from "./SingleProductPageFooterData";



export const SingleProductPage: FC = () => {
  const { productName, _id } = useParams();

  return (
    <>
      <Header />
      <div className="SinglePagebody">
        <Container>
          <div className="main">
            <div className="singlePageHeader">
              <SinglePageHeader />
              <SingleProductSearch productName={productName} />
            </div>
            <div className="hr">
              <hr />
            </div>
            <SingleProduct productName={productName}/>
          </div>
        </Container>
      </div>
      <SingleProductpageFooter SPPFData={SPPFData}/>
      <AboutSingleProduct />
      <Footer />
    </>
  );
};
