import React from "react";
import { Link } from "react-router-dom";
import { useCloseNav } from "../Hook/useCloseNav";
import { useTitle } from "../Hook/useTitle";
import "./styles/not-found.scss";

const NotFoundPage = () => {
  useTitle("Not Found");
  useCloseNav();

  return (
    <div className="not-found">
      <div className="not-found-main">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-content">
          <b>Ooops... Page not found.</b> <br />
          It looks like you are lost... That is a trouble?
        </p>
        <Link to="/">
          <button type="button" className="not-found-btn">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
