import React, {FC, Fragment} from 'react';


const Rajshahi = [
  {
    ofRajshahi: "All of Rajshahi",
  },
  {
    ofRajshahi: "New Market",
    hLink: "#"
  },
  {
    ofRajshahi: "Shaheb Bazar",
    hLink: "#"
  },
  {
    ofRajshahi: "Motihar",
    hLink: "#"
  },
  {
    ofRajshahi: "Uposahar",
    hLink: "#"
  },
  {
    ofRajshahi: "Rajpara",
    hLink: "#"
  },
];
export const AllOfRajshahi:FC = () => {
  return (
    <div>
      <h6 className="fw-bold mb-3 mt-0 pt-0">Select a local area within Rajshahi</h6>
          <span className="text-muted">Popular areas</span>

          {Rajshahi.map(({ofRajshahi}, index) => {
            return (
              <Fragment key={index}>
                <a
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{ofRajshahi}</small>
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}
    </div>
  );
};
