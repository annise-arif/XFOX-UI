import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Footer } from "../../Share/Footer/Footer";
import { Header } from "../../Share/Header/Header";
import "./SingleProductPage.css";
import { SinglePageHeader } from "../../Components/SinglePageHeader/SinglePageHeader";

import { SingleProductSearch } from "../../Components/SingleProductSearch/SingleProductSearch";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";

export const SingleProductPage: FC = () => {
  const { hLink, _id } = useParams();
  return (
    <>
      <Header />
      <div className="SinglePagebody">
        <Container>
          <div className="main">
           <div className="singlePageHeader">
           <SinglePageHeader />
            <SingleProductSearch />
           </div>
           <div className="hr">
              <hr />
            </div>
            <SingleProduct />
            
          </div>
        </Container>
        
      </div>
      <Footer />
    </>
  );
};
