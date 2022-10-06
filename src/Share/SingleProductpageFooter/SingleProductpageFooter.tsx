import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SingleProductPageFooter.css';


type dataProps = {
  id: number;
  name: string;
  accessories: string[];
}[]
export const SingleProductpageFooter:FC<{SPPFData: dataProps}> = ({SPPFData}) => {
  
  return (
    <div className='SPPFmain'>
      <Container>

        <Row  className='pt-4 pb-2 footerRow d-flex justify-content-evenly'>
         
          {SPPFData.map(({name, accessories}, ind) => {
            
            return (
              <Col key={ind} lg={3} md={3} xs={12}>
            <span className='fw-semibold'>{name}</span><br />
            
            <ul className='footerUl'>
              {accessories.map((item, i) =><li className='footerLinkStyle' key={i}><a className='footerAnchorStyle' href="#">{item}</a></li>)}
            </ul>
            
          </Col>
            )
          })}
          
        </Row>


      </Container>
    </div>
  );
};
