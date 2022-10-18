import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../component/Footer";
import Header from "../component/Header";

const Sharedlayout = () => {
  return (
    <Container
      fluid
      style={{ height: "100vh" }}
      className="p-0 d-flex flex-column justify-content-between"
    >
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Sharedlayout;
