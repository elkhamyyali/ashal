// src/components/Breadcrumb.js
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumb = ({ breadcrumbs, title }) => {
  return (
    <nav className="bg-[#63518C] p-4 py-10 text-center">
      {" "}
      <ol className="flex justify-center space-x-2">
        {" "}
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {" "}
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link
                  to={crumb.path}
                  className="text-purple-600 hover:underline"
                >
                  {" "}
                  {crumb.label}{" "}
                </Link>{" "}
                <span className="mx-2 text-white"> /</span>
              </>
            ) : (
              <span className="text-gray-300"> {crumb.label} </span>
            )}{" "}
          </li>
        ))}{" "}
      </ol>{" "}
      <h2 className="text-white text-3xl mt-5 font-bold mb-2"> {title} </h2>{" "}
    </nav>
  );
};

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Breadcrumb;
