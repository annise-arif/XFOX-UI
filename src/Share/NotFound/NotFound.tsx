import React, {FC} from 'react';
import { Container } from 'react-bootstrap';
import NotFoundImg from '../../assets/NotFoundImage/404_not_found.png';

export const NotFound:FC = () => {
  return (
    <Container>
      <img width="100%" height="100%" src={NotFoundImg} alt="Not-Found-Image" />
    </Container>
  );
};
