import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./QuickLinks.css";
import {QuickLinksData} from './Data';

export const QuickLinks: FC = () => {
  return (
    <Container>
      <h2 className="headLine">Quick links</h2>

      <Row className="mb-5 mt-3">
        
        {QuickLinksData.map(({title, link1, link2, link3, link4, link5}, index)=>{
          return (
            <Col lg={3} md={6} xs={12} className=""  key={index}>
            <Card className="quickLinkCard mt-1">
            
            <Card.Body className="d-flex" style={{ height: '10rem' }}>
              <div className="ms-4">
              <Card.Title className="fw-bold"><small className="QuickLinkTitle">{title}</small></Card.Title>
              <Card.Text>
                <span className="QuickLink">
                <a href="#">{link1}</a> | <a href="#">{link2}</a> | <a href="#">{link3}</a> | <a href="#">{link4}</a> | <a href="#">{link5}</a>
                </span>
              </Card.Text>
              </div>
            </Card.Body>
          </Card>
          </Col>
          );})}
        
      </Row>
    </Container>
  );
};
