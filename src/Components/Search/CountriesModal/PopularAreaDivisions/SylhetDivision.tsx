import React, {FC, Fragment} from 'react';


const Sylhet = [
  {
    ofSylhet: "All of Sylhet Division",
  },
  {
    ofSylhet: "Habiganj",
    hLink: "#"
  },
  {
    ofSylhet: "Maulvi Bazar",
    hLink: "#"
  },
  {
    ofSylhet: "Sunamganj",
    hLink: "#"
  },
  {
    ofSylhet: "Sreemangal",
    hLink: "#"
  },
  {
    ofSylhet: "Borolekha",
    hLink: "#"
  },
];
export const SylhetDivision:FC = () => {
  return (
    <div>
      <h6 className="fw-bold mb-3 mt-0 pt-0">Select a local area within Sylhet Division</h6>
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
