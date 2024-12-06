import Header from "./Header";
import AllTypes from "./AllTypes";
import { useLocation } from "react-router-dom";

import './css/style.css';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      
      <h1>Tous les Types</h1>
      <AllTypes/>
    </>
  )
}

export default App
