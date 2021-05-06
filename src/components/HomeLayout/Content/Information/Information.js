import { Card, Row, Col } from "antd";

const Information = () => {
  const { Meta } = Card;
  return (
    <Card style={{ width: 300 }} bordered={false}>
      <Row>
        <Col md={24}>
          <Meta title="Informacion" />
          Dirección
        </Col>
      </Row>
    </Card>
  );
};

export default Information;
