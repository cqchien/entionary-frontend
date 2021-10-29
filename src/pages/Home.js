import React from "react";
import { useTitle } from "../Hook/useTitle";
import Home from "../containers/Home";

const HomePage = () => {
  useTitle("Entionary - Comprehensive English learning application");
  
  return (
    <div className="container my-10">
      <Home />
    </div>
  );
};

export default HomePage;
