import React, {FC, Fragment} from 'react';


const Mymensingh = [
  {
    ofMymensingh: "All of Mymensingh",
  },
  {
    ofMymensingh: "Ganginar par",
    hLink: "#"
  },
  {
    ofMymensingh: "Chorpara",
    hLink: "#"
  },
  {
    ofMymensingh: "Valuka",
    hLink: "#"
  },
  {
    ofMymensingh: "Town Hall",
    hLink: "#"
  },
  {
    ofMymensingh: "Muktagacha",
    hLink: "#"
  },
];
export const AllOfMymensingh:FC = () => {
  return (
    <div>
      <h6 className="fw-bold mb-3 mt-0 pt-0">Select a local area within Mymensingh</h6>
          <span className="text-muted">Popular areas</span>

          {Mymensingh.map(({ofMymensingh}, index) => {
            return (
              <Fragment key={index}>
                <a
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{ofMymensingh}</small>
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}
    </div>
  );
};
