import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Footer } from '../../Share/Footer/Footer';
import {Header} from '../../Share/Header/Header';

export const SingleProductPage:FC = () => {
  const {hLink, _id} = useParams();
  return (
    <>
    <Header />
      <Container>
      <h1 className='py-5 my-5'>Single Product page {hLink} {_id}</h1>
      </Container>
    <Footer/>
    </>
  );
};
