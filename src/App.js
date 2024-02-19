import { createContext } from "react";
import "./App.scss";
import RouterInformation from "./routes/RouterInformation";
//!Toast imports
import "react-toastify/dist/ReactToastify.css";
import AlertComponent from "./components/globel/alert/AlertComponent";
import LoaderCoponent from "./components/globel/loader/LoaderCoponent";

//to pass mapload property to child without prop drilling
export const mapLoadedContext = createContext();

function App() {
  return (
    <mapLoadedContext.Provider value>
      <LoaderCoponent />
      <AlertComponent />
      <RouterInformation />
    </mapLoadedContext.Provider>
  );
}

export default App;
