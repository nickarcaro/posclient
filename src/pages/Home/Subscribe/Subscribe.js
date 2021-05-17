import { Row, Col, Layout } from "antd";

const Subscribe = () => {
  const { Content } = Layout;
  return (
    <Content style={{ padding: "0 50px", marginTop: 64 }}>
      <Row style={{ marginTop: 100, marginBottom: 100 }}>
        <Col xl={4} lg={4} />
        <Col xl={16} lg={16} style={{ textAlign: "center" }}>
          <p>Formulario de registro para usuario</p>
          <p>Formulario de registro para usuario</p>
          <p>Formulario de registro para usuario</p>
          <p>Formulario de registro para usuario</p>
          <p>Formulario de registro para usuario</p>
          <p>Formulario de registro para usuario</p>
          <p>Formulario de registro para usuario</p>
        </Col>
        <Col xl={4} lg={4} />
      </Row>
    </Content>
  );
};

export default Subscribe;
