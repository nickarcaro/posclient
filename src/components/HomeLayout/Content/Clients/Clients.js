import { Col, Row, Typography, List, Card } from "antd";

const data = [
  {
    title: "cliente 1",
  },
  {
    title: "cliente 2",
  },
  {
    title: "cliente 3",
  },
  {
    title: "cliente 4",
  },
  {
    title: "cliente 5",
  },
  {
    title: "cliente 6",
  },
];
const Clients = () => {
  const { Title } = Typography;
  const styleRow = { marginTop: 100, marginBottom: 50 };
  const styleText = { textAlign: "center", marginBottom: 40, lineHeight: 0.7 };
  return (
    <Row style={styleRow}>
      <Col lg={24} style={styleText}>
        <Title level={2}>Nuestros clientes</Title>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <List
          grid={{ gutter: 30, column: 6 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title} />
            </List.Item>
          )}
        />
      </Col>
      <Col lg={4} />
    </Row>
  );
};

export default Clients;
