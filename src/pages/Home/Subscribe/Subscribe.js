import { Row, Col } from "antd";

const Subscribe = () => {
  return (
    <Row>
      <Col lg={24}>
        <h1>registrate</h1>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row gutter={24}>
          <Col lg={12}>registro</Col>

          <Col lg={12}>planes</Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
};

export default Subscribe;
