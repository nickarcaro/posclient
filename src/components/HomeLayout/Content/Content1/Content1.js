import { Col, Row, Typography, Card } from "antd";
import TweenOne from "rc-tween-one";

const Content1 = () => {
  const { Title } = Typography;
  const styleRow = { marginTop: 100, marginBottom: 50 };
  const styleText = { textAlign: "center", marginBottom: 40, lineHeight: 0.7 };
  return (
    <Row style={styleRow}>
      <Col lg={4} />
      <Col lg={16}>
        <Row>
          <Col lg={12}>
            <TweenOne
              animation={{
                x: 5,
                scale: 0.4,
                rotate: 120,
                yoyo: true,
                repeat: -1,
                duration: 1000,
              }}
              style={{ transform: "translateX(-80px)", background: "#364D79" }}
              className="code-box-shape"
            >
              c
            </TweenOne>
          </Col>
          <Col lg={12}>
            <Card style={{ width: 300 }} bordered={false}>
              descripcion
            </Card>
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
};

export default Content1;
