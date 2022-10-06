import React, {FC, PropsWithChildren} from 'react';
import Button from "react-bootstrap/Button";
import {ReactComponent as Arrow} from '../../assets/svg/rightArrow.svg';
import './ExploreButton.css';

export const ExploreButton:FC<PropsWithChildren> = ({children}) => {
  return (
    <Button className="exploreBtnBg rounded-pill px-5 fw-semibold"><span>{children}</span><Arrow className="ms-2"/></Button>
  );
};