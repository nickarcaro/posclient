import { Layout, Row, Col, Space } from "antd";

import MenuTop from "../../components/HomeLayout/MenuTop";
import Banner from "../../components/HomeLayout/MenuTop/Banner";
import Clients from "../../components/HomeLayout/Content/Clients";
import AboutUs from "../../components/HomeLayout/Content/AboutUs";
const HomeLayout = () => {
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
          <AboutUs />
        </div>
      </Content>
      <Content className="site-layout">
        <div className="site-layout-background">
          <Clients />
        </div>
      </Content>
      <Footer style={{ background: "black" }}>
        <h2 style={{ color: "white" }}>suscribete</h2>
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
