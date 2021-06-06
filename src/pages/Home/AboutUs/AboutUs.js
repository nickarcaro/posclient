import { Row, Col, Typography, Layout } from "antd";
//componentes para pagina sobre nosotros
import FAQ from "../../../components/HomeLayout/Content/FAQ";
import DescriptionUs from "../../../components/HomeLayout/Content/DescriptionUs";
const AboutUs = () => {
  const { Title } = Typography;
  const { Content } = Layout;
  return (
    <Content style={{ padding: "0 50px", marginTop: 64 }}>
      <Row style={{ marginTop: 100, marginBottom: 100 }}>
        <Col xl={4} lg={4} />
        <Col xl={16} lg={16}>
          <DescriptionUs />
          <Title> Preguntas Frecuentes</Title>
          <FAQ />
        </Col>
        <Col xl={4} lg={4} />
      </Row>
    </Content>
  );
};

export default AboutUs;
