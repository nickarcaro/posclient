import { Row, Col, Typography } from "antd";

const AboutUs = () => {
  const { Title } = Typography;
  return (
    <>
      <Row style={{ marginTop: 100, marginBottom: 100 }}>
        <Col lg={24}>
          <Title>Nosotros</Title>
        </Col>

        <Col lg={4} />
        <Col lg={16}>
          <Row>
            <Col md={24}>Sobre nosotros</Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </>
  );
};

export default AboutUs;
