import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./loader.scss";
import { useSelector } from "react-redux";

function LoaderCoponent() {
  const { isLoading } = useSelector((state) => state.GlobalReducer);

  return (
    <div>
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader-container1">
            <Spinner animation="border" role="status" className="loaderColor" />
          </div>
        </div>
      )}
    </div>
  );
}

export default LoaderCoponent;
