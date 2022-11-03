import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FoundersDescription from "./pages/FoundersDescription";
import PreRegistration from "./pages/PreRegistration";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/founders" element={<FoundersDescription />} />
        <Route exact path="/registration" element={<PreRegistration />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
