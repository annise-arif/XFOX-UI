import React, { FC } from "react";
import Form from "react-bootstrap/Form";
import "./Search.css";

export const Search: FC = () => {
  let Country = "All of Bangladesh";
  return (
    <div className="Search pt-5">
      <div className="location">
        <button className="locationBtn mx-auto mb-3">
          <span className="locationIcon">
            <div className="icon--3D09z LocationIcon small--2q8vN gtm-search-click">
              <svg
                fill="white"
                viewBox="0 0 60 60"
                className="svg-wrapper--8ky9e"
              >
                <path d="M30 10c-8.4 0-15.3 6.7-15.3 15 0 4.7 2.3 10.2 6.8 16.5 3.3 4.5 6.5 7.7 6.6 7.8.5.5 1.1.7 1.8.7s1.3-.2 1.8-.7c.1-.1 3.4-3.3 6.6-7.8 4.5-6.2 6.8-11.8 6.8-16.5.2-8.3-6.7-15-15.1-15zm0 8.8c3.5 0 6.4 2.8 6.4 6.2s-2.9 6.2-6.4 6.2c-3.5 0-6.4-2.8-6.4-6.2s2.9-6.2 6.4-6.2"></path>
              </svg>
            </div>
          </span>
          <span>{Country}</span>
        </button>
      </div>
      <Form className="d-flex SearchForm">
      <Form.Control
          type="search"
          placeholder="What are you looking for?"
          className="SearchInput mx-auto rounded-5 px-4 py-3"
          aria-label="Search"
        />
        <div className="SearchIcon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 17 17"
            className="svg-wrapper--8ky9e"
          >
            <path
              d="M7.615 15.23a7.615 7.615 0 1 1 6.1-3.054l2.966 2.967a1.088 1.088 0 0 1-1.539 1.538l-2.966-2.966a7.582 7.582 0 0 1-4.56 1.516zm5.44-7.615a5.44 5.44 0 1 1-10.88 0 5.44 5.44 0 0 1 10.88 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </Form>
    </div>
  );
};
