import { createContext } from 'react';
import './App.scss';
import RouterInformation from './routes/RouterInformation';

//to pass mapload property to child without prop drilling
export const mapLoadedContext = createContext();

function App() {
  return (
    <mapLoadedContext.Provider value>
         <RouterInformation />
    </mapLoadedContext.Provider>
  );
}

export default App;
