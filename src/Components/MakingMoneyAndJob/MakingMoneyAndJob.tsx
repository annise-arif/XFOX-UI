import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MakingMoneyAndJob.css";
import {ReactComponent as MoneyMaking} from '../../assets/svg/makingMoney.svg';
import {ReactComponent as Plus} from '../../assets/svg/plus.svg';
import { ExploreButton } from "../Button/ExploreButton";


export const MakingMoneyAndJob: FC = () => {
  return (
    <Container>
      <Row className="mx-auto mb-5 mt-4">
        <Col lg={6} md={6} xs={12} className="ps-0 pe-0">
          <Card className="Card1">
          
            <Card.Body className="d-flex">
              <MoneyMaking className="me-2"/>
              <div className="ms-4">
              <Card.Title className="fw-bold">Start making money!</Card.Title>
              <Card.Text>
                <small>Do you have something to sell? <br /> Post your first ad and start making money!</small>
              </Card.Text>
              <Button variant="warning" className="rounded-pill px-3 fw-bold pt-1 pb-2"><Plus className="me-2 mb-0"/><small>Post your ad for free</small></Button>
              </div>
            </Card.Body>
          </Card>
        
        </Col>
        <Col lg={6} md={6} xs={12} className="ps-0 pe-0">
        <Card className="Card2">
          
          <Card.Body className="d-flex">
            <div className="content ms-4">
            <Card.Title className=""><h1 className="text-primary fw-bold">Xfox<small className="fw-normal fs-4">Jobs</small></h1></Card.Title>
            <Card.Text>
              <small>Looking to hire or get hired in Bangladesh ? <br /> Get access to 800k+ CVs or browse through 800+ job vacancies!</small>
            </Card.Text>
            <ExploreButton>Explore more</ExploreButton>
            </div>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};
