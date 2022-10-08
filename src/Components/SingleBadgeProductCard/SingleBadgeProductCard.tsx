import React, { FC } from 'react';
import { ReactComponent as Badge } from "../../assets/svg/badge.svg";
import Card from "react-bootstrap/Card";
import './SingleBadgeProductCard.css';
import { Link } from 'react-router-dom';



type badgeProductsProps = {
  img: string;
  name: string;
  location: string;
  price: string;
  id: number;
}[];


export const SingleBadgeProductCard:FC<{badgeProductsData: badgeProductsProps}> = ({badgeProductsData}) => {
  
  return (
    <>
       {badgeProductsData.map(({ img, name, location, price, id }, index) => {
            return (
              <Link to={`productDetails/${name}/${id}`} style={{textDecoration: "none"}}>
              <Card
                key={index}
                className="mainCard"
                style={{
                  maxWidth: "39.4rem",
                  maxHeight: "auto",
                  marginBottom: "20px",
                }}
              >
                
                <Card.Body
                 className="cardBody">
                  <img style={{ width: "170px", height: "130px" }} src={img} />
                  <div className="cardContent">
                    <Card.Title className="ProductName">{name}</Card.Title>
                    <Card.Text className="productLocation">
                      {location}
                    </Card.Text>
                    <h6 className="productPrice">{price}</h6>
                  </div>
                </Card.Body>
                
                <span className="badge">
                  <Badge />
                </span>
                
              </Card>
              </Link>
               
            );
          })}
    </>
  );
};
