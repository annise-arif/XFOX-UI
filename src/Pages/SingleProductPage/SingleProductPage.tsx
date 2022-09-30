import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Footer } from '../../Share/Footer/Footer';
import {Header} from '../../Share/Header/Header';
import { SinglePageHeader } from './SinglePageHeader/SinglePageHeader';
import './SingleProductPage.css';


const Data = [
  {
    slImg1: "",
  }
];

export const SingleProductPage:FC = () => {
  const {hLink, _id} = useParams();
  return (
    <>
    <Header />
      <div className='main'>
      <Container>
        <SinglePageHeader />
      </Container>
      </div>
    <Footer/>
    </>
  );
};
