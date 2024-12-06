import Header from "../Header";
import AllTypes from "../component/ComponentAllTypes";
import { useLocation } from "react-router-dom";

import '../css/style.css';

function DisplayAllTypes() {
  const location = useLocation();
  return (
    <>
      <Header />
      
      <h1>Tous les Types</h1>
      <AllTypes/>
    </>
  )
}

export default DisplayAllTypes
