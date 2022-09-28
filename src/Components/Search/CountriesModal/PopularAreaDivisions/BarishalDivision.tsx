import React, {FC, Fragment} from 'react';


const Barishal = [
  {
    ofBarishal: "All of Barishal Division",
  },
  {
    ofBarishal: "Patuakhali",
    hLink: "#"
  },
  {
    ofBarishal: "Bhola",
    hLink: "#"
  },
  {
    ofBarishal: "Pirojpur",
    hLink: "#"
  },
  {
    ofBarishal: "Barhuna",
    hLink: "#"
  },
  {
    ofBarishal: "Jhalokati",
    hLink: "#"
  },
];
export const BarishalDivision:FC = () => {
  return (
    <div>
      <h6 className="fw-bold mb-3 mt-0 pt-0">Select a local area within Barishal Division</h6>
          <span className="text-muted">Popular areas</span>

          {Barishal.map(({ofBarishal}, index) => {
            return (
              <Fragment key={index}>
                <a
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{ofBarishal}</small>
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}
    </div>
  );
};
