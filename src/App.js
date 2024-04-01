import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./components/Home";
import Team from "./components/Team/Team";
import AllTeams from "./components/Team/AllTeams";
import GetTeam from "./components/Team/GetTeam";
import ErrorPage from "./components/ErrorPage";




function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/allteams" element={<AllTeams />} />
          <Route path="/allteams/:id" element={<GetTeam />} />
          <Route path="*" element={<ErrorPage />} />
        
         
        </Routes>
     
      </BrowserRouter>
    </>
  );
}

export default App;
