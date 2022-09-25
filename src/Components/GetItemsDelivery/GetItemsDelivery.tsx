import React, {FC} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './GetItemsDelivery.css';
import {ReactComponent as DeliveredIcon} from '../../assets/svg/deliveryIcon.svg';
import {ReactComponent as DoorStep} from '../../assets/svg/doorStep.svg';
import { ExploreButton } from '../Button/ExploreButton';

export const GetItemsDelivery:FC = () => {
  return (
    <Container>
      <Row className="mx-auto mb-5 mt-4">
        <Col lg={12} md={12} xs={12} className="ps-0 pe-0">

          <Card className="DeliveredCard">
            <Card.Body className="d-flex">
              <DeliveredIcon className="me-2"/>
              <div className="ms-4">
              <Card.Title className="fw-bold fs-5">Get items delivered to you with <DoorStep className='ms-3'/></Card.Title>
              <Card.Text>
                <small>Choose from over 4,100 items that can be delivered to your doorstep. Order online and enjoy our <b>Buyer Protection</b> <br /> program, which means that we'll replace the item for FREE if it's not as described in the ad!</small>
              </Card.Text>
              <ExploreButton>Shop now</ExploreButton>
              </div>
            </Card.Body>
          </Card>
        
        </Col>
      </Row>
    </Container>
  );
};
