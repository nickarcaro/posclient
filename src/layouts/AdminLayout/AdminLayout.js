import { Layout } from "antd";
import MenuSider from "../../components/AdminLayout/MenuSider";
import { LoadRoutes } from "../LoadRoutes";
const AdminLayout = ({ routes }) => {
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
        collapsible
      >
        <div className="logo" />
        <MenuSider />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            <LoadRoutes routes={routes} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
