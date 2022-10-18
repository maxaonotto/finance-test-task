import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sharedlayout from "../layout/Sharedlayout";
import HomePage from "../page/Home/HomePage";
import PortfolioPage from "../page/Portfolio/PortfolioPage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
