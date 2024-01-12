import {
    Routes,
    Route,
  } from "react-router-dom";
import HomePage from "../pages/HomePage"
import LroPage from "../pages/LroPage";
import LRORegistrationPage from "../pages/LRORegistrationPage";

const RouterInformation = () =>{
  return (
        <Routes>
            <Route path="/home" element={<HomePage />} exact/>
            <Route path="/registration" element={<LRORegistrationPage/>} exact/>
            <Route path="/" element={<LroPage />} exact/>
        </Routes>
  )
}

export default RouterInformation