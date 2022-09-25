import React, {FC, PropsWithChildren} from 'react';
import Button from "react-bootstrap/Button";
import {ReactComponent as Arrow} from '../../assets/svg/rightArrow.svg';

export const ExploreButton:FC<PropsWithChildren> = ({children}) => {
  return (
    <Button variant="primary" className="rounded-pill px-5 fw-semibold pt-1 pb-2"><span>{children}</span><Arrow className="ms-2"/></Button>
  );
};