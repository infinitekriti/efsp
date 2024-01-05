import { createContext } from 'react';
import './App.scss';
import RouterInformation from './routes/RouterInformation';
//!Toast imports
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

//to pass mapload property to child without prop drilling
export const mapLoadedContext = createContext();

function App() {
  return (
    <mapLoadedContext.Provider value>
      <ToastContainer
        className={"toast"}
        theme="colored"
        autoClose={3000}
        position={toast.POSITION.BOTTOM_RIGHT}
        pauseOnHover
        hideProgressBar={true}
      />
         <RouterInformation />
    </mapLoadedContext.Provider>
  );
}

export default App;
