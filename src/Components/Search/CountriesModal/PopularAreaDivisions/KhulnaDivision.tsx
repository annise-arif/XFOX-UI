import React, {FC, Fragment} from 'react';


const Khulna = [
  {
    ofKhulna: "All of Khulna Division",
  },
  {
    ofKhulna: "Kushtia",
    hLink: "#"
  },
  {
    ofKhulna: "Jashore",
    hLink: "#"
  },
  {
    ofKhulna: "Jhenaidah",
    hLink: "#"
  },
  {
    ofKhulna: "Satkhira",
    hLink: "#"
  },
  {
    ofKhulna: "Bagerhat",
    hLink: "#"
  },
];
export const KhulnaDivision:FC = () => {
  return (
    <div>
      <h6 className="fw-bold mb-3 mt-0 pt-0">Select a local area within Khulna Division</h6>
          <span className="text-muted">Popular areas</span>

          {Khulna.map(({ofKhulna}, index) => {
            return (
              <Fragment key={index}>
                <a
                  href="#"
                  className="mt-3 d-flex justify-content-between text-decoration-none fw-normal"
                >
                  <small>{ofKhulna}</small>
                </a>
                <hr className="text-muted" />
              </Fragment>
            );
          })}
    </div>
  );
};
