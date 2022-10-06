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


const SPPFData = [
  {
    id: 1,
    name: "Mobiles, Accessories & services",
    accessories: ["Mobile Phones", "Mobile Phones Accessories", "Wearables", "SIM Cards", "Mobile Phone Services"]

  },
  {
    id: 2,
    name: "Mobile Phones By Location",
    accessories: ["Mobile Phones in Dhaka", "Mobile Phones in Dhaka Division", "Mobile Phones in Chattogram", "Mobile Phones in Khulna", "Mobile Phones in Khulna Division"]

  },
  {
    id: 3,
    name: "Mobile Phones By Brand",
    accessories: ["Samsung Mobile Phones in Bangladesh", "Xiaomi Mobile Phones in Bangladesh", "Apple Mobile Phones in Bangladesh", "Oppo Mobile Phones in Bangladesh", "Realme Mobile Phones in Bangladesh"]

  },
  {
    id: 4,
    name: "Mobile Accessories By Location",
    accessories: ["Mobile Phones Accessories in Dhaka", "Mobile Phones Accessories in Dhaka Division", "Mobile Phones Accessories in Chattogram", "Mobile Phones Accessories in Khulna", "Mobile Phones Accessories in Khulna Division"]

  },
];


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
