import React, { useState, useEffect } from "react";
import { Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { onHideErrorAndSuccess } from "../../../redux/reducers/GlobalSlice";
import "./alert.scss";

const AlertComponent = () => {
  const { isError, isSuccess, successMsg, errorMsg } = useSelector(
    (state) => state.GlobalReducer
  );
  const variantClass = isError ? "alertError" : "alertSuccess";
  const dispatch = useDispatch();
  useEffect(() => {
    let timer;
    if (isError || isSuccess) {
      timer = setTimeout(() => {
        dispatch(onHideErrorAndSuccess());
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isError, isSuccess]);

  return (
    <div>
      {(isError || isSuccess) && (
        <Toast show={true} className={`alertStyle ${variantClass}`}>
          <Toast.Body>{`${successMsg || errorMsg}`}</Toast.Body>
        </Toast>
      )}
    </div>
  );
};

export default AlertComponent;
