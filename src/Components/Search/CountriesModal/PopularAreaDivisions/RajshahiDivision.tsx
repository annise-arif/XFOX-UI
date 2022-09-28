import React, {FC, Fragment} from 'react';


const Rajshahi = [
  {
    ofRajshahi: "All of Rajshahi Division",
  },
  {
    ofRajshahi: "Pabna",
    hLink: "#"
  },
  {
    ofRajshahi: "Bogura",
    hLink: "#"
  },
  {
    ofRajshahi: "Natore",
    hLink: "#"
  },
  {
    ofRajshahi: "Sirajganj",
    hLink: "#"
  },
  {
    ofRajshahi: "Naogaon",
    hLink: "#"
  },
];
export const RajshahiDivision:FC = () => {
  return (
    <div>
      <h6 className="fw-bold mb-3 mt-0 pt-0">Select a local area within Rajshahi Division</h6>
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
