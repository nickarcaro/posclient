import { Card, Col, Row, Typography } from "antd";
import {
  FundOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const HowToWork = () => {
  //estilos
  const styleRow = { marginTop: 100, marginBottom: 50 };
  const styleText = { textAlign: "center", marginBottom: 40, lineHeight: 0.7 };
  const paddingCard = { padding: 15 };
  const styleIcon = { fontSize: 45, marginBottom: 20 };
  const { Title } = Typography;

  return (
    <Row style={styleRow}>
      <Col lg={24} style={styleText}>
        <Title level={2}>¿Cómo funciona?</Title>
        <Title level={3}>Registra tu almacen y comienza a gestionar</Title>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row>
          <Col md={8} style={paddingCard}>
            <CardInfo
              icon={<ShopOutlined style={styleIcon} />}
              title="En la Nube"
              description="Manten las operaciones diarias de tu negocio de manera online y almacenada en la nube."
            />
          </Col>
          <Col md={8} style={paddingCard}>
            <CardInfo
              icon={<FundOutlined style={styleIcon} />}
              title="Reportes"
              description="Accede a reportes de tu negocio."
            />
          </Col>
          <Col md={8} style={paddingCard}>
            <CardInfo
              icon={<UsergroupAddOutlined style={styleIcon} />}
              title="Ventas"
              description="Añade vendedores a tu almacén."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
};

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="card" hoverable>
      {icon}
      <Meta title={title} description={description} />
    </Card>
  );
}
export default HowToWork;
