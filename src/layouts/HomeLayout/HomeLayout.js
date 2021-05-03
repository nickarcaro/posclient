import { Layout, Row, Col } from "antd";

import MenuTop from "../../components/HomeLayout/MenuTop";
import Banner from "../../components/HomeLayout/MenuTop/Banner";
import { LoadRoutes } from "../LoadRoutes";
const HomeLayout = ({ routes }) => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header className="header">
        <Row>
          <Col lg={1} />
          <Col lg={11}>
            <div className="logo" />
          </Col>
          <Col lg={2} />
          <Col lg={10}>
            <MenuTop />
          </Col>
        </Row>
      </Header>
      <Banner />
      <Content className="site-layout">
        <div className="site-layout-background">
          <LoadRoutes routes={routes} />
        </div>
      </Content>
      <Footer style={{ background: "black" }}>
        <h2 style={{ color: "white" }}>suscribete</h2>
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
