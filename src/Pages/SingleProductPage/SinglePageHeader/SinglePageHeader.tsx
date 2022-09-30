import React, {FC} from "react";
import { ReactComponent as Bike } from "../../../assets/singlePageSvg/bike.svg";
import { ReactComponent as DoorStep } from "../../../assets/singlePageSvg/doorStep.svg";
import { ReactComponent as RightArrow } from "../../../assets/singlePageSvg/rightArrow.svg";
import "./SinglePageHeader.css";


export const SinglePageHeader:FC = () => {
  return (
    <div className="header d-flex">
      <div className="bikeSvg">
        <div className="svg">
          <Bike />
        </div>
      </div>
      <div className="paraAndExploreBtn">
        <div className="d-flex align-items-center">
          <p className="explorePara">
            Get items Delivered to you safely & securely with
          </p>
          <DoorStep />
        </div>
        <button className="exploreBtn border-none d-flex">
          <span>Explore</span>{" "}
          <div className="rightArrow">
            <RightArrow className="arrowIcon" />
          </div>
        </button>
      </div>
    </div>
  );
};

