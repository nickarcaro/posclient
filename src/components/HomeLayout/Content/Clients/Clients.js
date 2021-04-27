import { Card, Col, Row, Typography } from "antd";

const Clients = () => {
  const { Title } = Typography;
  return (
    <>
      <Title style={{ textAlign: "center" }}>Nuestros Clientes</Title>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Cliente 1" bordered={false}>
              Descripción 1
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Cliente 2" bordered={false}>
              Descripción 2
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Cliente 3" bordered={false}>
              Descripción 3
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Clients;
