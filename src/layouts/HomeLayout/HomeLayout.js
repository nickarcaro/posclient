import { Layout, Row, Col } from "antd"; //libreria de estilo
import { Link } from "react-router-dom"; //link para redireccionar
//componentes
import MenuTop from "../../components/HomeLayout/MenuTop";
import MainFooter from "../../components/HomeLayout/Footer/MainFooter";
import { LoadRoutes } from "../LoadRoutes"; //funcion para cargar rutas

const HomeLayout = ({ routes }) => {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Row>
          <Col lg={1} />
          <Col lg={11}>
            <Link to={"/"}>
              <div className="logo-home" />
            </Link>
          </Col>
          <Col lg={2} />
          <Col lg={10}>
            <MenuTop />
          </Col>
        </Row>
      </Header>
      <Content>
        <LoadRoutes routes={routes} />
      </Content>

      <MainFooter />
    </Layout>
  );
};

export default HomeLayout;
