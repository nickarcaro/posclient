import { Row, Col, Layout } from "antd";
//componente de formulario de suscripcion
import SubscribeForm from "../../../components/HomeLayout/SubscribeForm";

const Subscribe = () => {
  const { Content } = Layout;
  return (
    <Content style={{ padding: "0 50px", marginTop: 80 }}>
      <Row style={{ marginTop: 100, marginBottom: 100 }}>
        <Col xl={4} lg={4} />

        <Col xl={16} lg={16} style={{ textAlign: "center" }}>
          <h2>Suscripción</h2>
          <SubscribeForm />
        </Col>
        <Col xl={4} lg={4} />
      </Row>
    </Content>
  );
};

export default Subscribe;
