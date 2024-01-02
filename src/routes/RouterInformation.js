import {
    Routes,
    Route,
  } from "react-router-dom";
import HomePage from "../pages/HomePage"
import LroPage from "../pages/LroPage";

const RouterInformation = () =>{
  return (
        <Routes>
            <Route path="/home" element={<HomePage />} exact/>
            <Route path="/" element={<LroPage />} exact/>
        </Routes>
  )
}

export default RouterInformation