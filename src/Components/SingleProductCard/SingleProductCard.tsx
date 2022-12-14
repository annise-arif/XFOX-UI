import React, { FC } from 'react';
import './SingleProductCard.css';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

type  productsDataProps = {
  img: string;
  name: string;
  location: string;
  price: string;
  releaseTime: string;
  id: number;
}[];

export const SingleProductCard:FC<{productsData :productsDataProps }> = ({productsData}) => {
  return (
    <div>
      {productsData.map(
      ({ img, name, location, price, releaseTime, id }, i) => {
        return (
          <Link to={`productDetails/${name}/${id}`} style={{textDecoration: "none"}}>
          <Card
            key={i}
            className="productsCard"
            style={{
              maxWidth: "39.4rem",
              maxHeight: "auto",
            }}
          >
            <Card.Body className="productsCardBody">
              <img
                style={{ width: "140px", height: "100px" }}
                src={img}
              />
              <div className="cardContent">
                <Card.Title className="ProductName">{name}</Card.Title>
                <Card.Text className="productLocation">
                  {location}
                </Card.Text>
                <h6 className="productPrice">{price}</h6>
              </div>
            </Card.Body>
            <span className="releaseTime">{releaseTime}</span>
          </Card>
          </Link>
        );
      }
    )}
    </div>
  );
};
