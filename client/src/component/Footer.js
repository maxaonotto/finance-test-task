import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="py-3 text-center fs-5 bg-black">
      <Row>
        <Col className="text-white">All rights reserved &copy; NASDAQ</Col>
      </Row>
    </Container>
  );
};

export default Footer;
