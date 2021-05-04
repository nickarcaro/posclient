import Information from "../../../components/HomeLayout/Content/Information";
import ContactForm from "../../../components/HomeLayout/Content/ContactForm";

import { Row, Col, Typography } from "antd";

const Contact = () => {
  const { Title } = Typography;
  return (
    <>
      <Row style={{ marginTop: 100, marginBottom: 100 }}>
        <Col lg={24}>
          <Title>contacto</Title>
        </Col>

        <Col lg={4} />
        <Col lg={16}>
          <Row>
            <Col md={12}>
              <ContactForm />
            </Col>
            <Col md={12}>
              <Information />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </>
  );
};

export default Contact;
