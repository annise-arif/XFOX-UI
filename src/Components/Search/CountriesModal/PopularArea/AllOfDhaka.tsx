import React, {FC, Fragment} from 'react';


const Dhaka = [
  {
    ofDhaka: "All of Dhaka",
  },
  {
    ofDhaka: "Mirpur",
    hLink: "#"
  },
  {
    ofDhaka: "Uttara",
    hLink: "#"
  },
  {
    ofDhaka: "Mohammadpur",
    hLink: "#"
  },
  {
    ofDhaka: "Savar",
    hLink: "#"
  },
  {
    ofDhaka: "Dhanmondi",
    hLink: "#"
  },
];
export const AllOfDhaka:FC = () => {
  return (
    <div>
      <h6 className="fw-bold mb-3 mt-0 pt-0">Select a local area within Dhaka</h6>
          <span className="text-muted">Popular areas</span>

          {Dhaka.map(({ofDhaka}, index) => {
            return (
              <Fragment key={index}>
                <a
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{ofDhaka}</small>
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}
    </div>
  );
};
