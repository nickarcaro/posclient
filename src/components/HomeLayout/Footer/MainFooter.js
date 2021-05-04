import { Layout, Row, Col } from "antd";

const MainFooter = () => {
  const { Footer } = Layout;
  return (
    <Footer
      className="footer"
      style={{ borderTop: 3, backgroundColor: "gray" }}
    >
      <Row>
        <Col md={4} />
        <Col md={16}>
          <Row>
            <Col md={8}>Direccion</Col>
            <Col md={16}>Links de interes</Col>
          </Row>
          <Row className="footer__copyright" style={{ marginTop: 30 }}>
            <Col md={14}>© 2021 equipo</Col>
            <Col md={10}>integrantes</Col>
          </Row>
        </Col>
        <Col md={4} />
      </Row>
    </Footer>
  );
};

export default MainFooter;
