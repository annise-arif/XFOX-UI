import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemsCategoryData } from "./Data";
import './ItemsCategory.css';

export const ItemsCategory: FC = () => {
  
  return (
    <Container>
      <h6 className="fw-bold mt-4 mb-3">Browse items by category</h6>
      <Row lg={4} md={3} xs={2} className="ms-5 ps-4">
        {ItemsCategoryData.map(({ SvgIcon, info, infoCount, productName, _id }, index) => {
          return (
            <Col key={index} className="mb-5 mt-3">
              <Link to={productName} className="d-flex text-decoration-none text-dark mt-1">
                <div className="itemIcon mt-1">
                  <SvgIcon />
                </div>
                <div className="itemInfo">
                  <p className="info">{info}</p>
                  <span className="infoCount">{infoCount}</span>
                </div>
                </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
