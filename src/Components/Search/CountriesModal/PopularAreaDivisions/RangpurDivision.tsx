import React, {FC, Fragment} from 'react';


const Rangpur = [
  {
    ofRangpur: "All of Rangpur Division",
  },
  {
    ofRangpur: "Dinajpur",
    hLink: "#"
  },
  {
    ofRangpur: "Gaibandha",
    hLink: "#"
  },
  {
    ofRangpur: "Kurigram",
    hLink: "#"
  },
  {
    ofRangpur: "Saidpur",
    hLink: "#"
  },
  {
    ofRangpur: "Lalmonirhat",
    hLink: "#"
  },
];
export const RangpurDivision:FC = () => {
  return (
    <div>
      <h6 className="fw-bold mb-3 mt-0 pt-0">Select a local area within Rangpur Division</h6>
          <span className="text-muted">Popular areas</span>

          {Rangpur.map(({ofRangpur}, index) => {
            return (
              <Fragment key={index}>
                <a
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{ofRangpur}</small>
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}
    </div>
  );
};
