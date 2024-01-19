import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestDataAsync } from "../redux/actions/TestAction";
import { updateName } from "../redux/reducers/TestSlice";

function Test() {
  const { data ,name} = useSelector((state) => state.TestReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTestDataAsync());
  }, [dispatch]);
  const updateNameValue=()=>{
    dispatch(updateName("update name"))
  }
  return <div>{console.log("api data", data)}
  {name}
  <button onClick={updateNameValue}>update Name</button>
  </div>;
}

export default Test;
