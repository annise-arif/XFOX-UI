import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

type  productsDataProps = {
  img: string;
  name: string;
  location: string;
  price: string;
  releaseTime: string;
  id: number;
}[];

export const RelatedProductCard:FC<{relatedProductsData :productsDataProps }> = ({relatedProductsData}) => {
  return (
    <Row className='mx-5'>
      {relatedProductsData.map(
      ({ img, name, location, price, releaseTime, id }, i) => {
        return (

         <Col lg={6} className="px-4">
          <Card
            key={i}
            className="border-0 pt-1"
            style={{
              maxWidth: "33rem",
              maxHeight: "auto",
            }}
          >
            <Card.Body className="productsCardBody mt-2">
              <img
                style={{ maxWidth: "150px", maxHeight: "120px" }}
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
          </Col>
          
        );
      }
    )}
    </Row>
  );
};
