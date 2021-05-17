import Information from "../../../components/HomeLayout/Content/Information";
import ContactForm from "../../../components/HomeLayout/Content/ContactForm";
import { Row, Col, Typography } from "antd";

//pagina de contacto
const Contact = () => {
  const { Title } = Typography;
  const styleRow = { marginTop: 100, marginBottom: 100 };

  return (
    <Row style={styleRow}>
      <Col lg={24} style={{ textAlign: "center", marginBottom: 25 }}>
        <Title>Contacto</Title>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row gutter={24}>
          <Col lg={12}>
            <ContactForm />
          </Col>

          <Col lg={12}>
            <Information />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
};

export default Contact;
