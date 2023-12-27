import {
    Routes,
    Route,
  } from "react-router-dom";
import HomePage from "../pages/HomePage"

const RouterInformation = () =>{
  return (
        <Routes>
            <Route path="/" element={<HomePage />} exact/>
        </Routes>
  )
}

export default RouterInformation