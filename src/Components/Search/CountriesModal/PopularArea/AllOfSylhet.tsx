import React, {FC, Fragment} from 'react';


const Sylhet = [
  {
    ofSylhet: "All of Sylhet",
  },
  {
    ofSylhet: "Zinda Bazar",
    hLink: "#"
  },
  {
    ofSylhet: "Bandar Bazar",
    hLink: "#"
  },
  {
    ofSylhet: "Amber Khana",
    hLink: "#"
  },
  {
    ofSylhet: "South Surma",
    hLink: "#"
  },
  {
    ofSylhet: "Shibgonj",
    hLink: "#"
  },
];
export const AllOfSylhet:FC = () => {
  return (
    <div>
      <h6 className="fw-bold mb-3 mt-0 pt-0">Select a local area within Sylhet</h6>
          <span className="text-muted">Popular areas</span>

          {Sylhet.map(({ofSylhet}, index) => {
            return (
              <Fragment key={index}>
                <a
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{ofSylhet}</small>
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}
    </div>
  );
};
