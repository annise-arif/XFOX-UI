import React, {FC, Fragment} from 'react';


const Chattogram = [
  {
    ofChattogram: "All of Chattogram Division",
  },
  {
    ofChattogram: "Cumilla",
    hLink: "#"
  },
  {
    ofChattogram: "Noakhali",
    hLink: "#"
  },
  {
    ofChattogram: "Chandpur",
    hLink: "#"
  },
  {
    ofChattogram: "Brahmanbaria",
    hLink: "#"
  },
  {
    ofChattogram: "Feni",
    hLink: "#"
  },
];
export const ChattogramDivision:FC = () => {
  return (
    <div>
      <h6 className="fw-bold mb-3 mt-0 pt-0">Select a local area within Chattogram Division</h6>
          <span className="text-muted">Popular areas</span>

          {Chattogram.map(({ofChattogram}, index) => {
            return (
              <Fragment key={index}>
                <a
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{ofChattogram}</small>
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}
    </div>
  );
};
