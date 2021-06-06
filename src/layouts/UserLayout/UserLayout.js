import { Layout } from "antd";
//componente menutop (reutilizado tambien en adminlayout)
import MenuTop from "../../components/AdminLayout/MenuTop";

const UserLayout = ({ children }) => {
  const { Header, Content } = Layout; //componentes

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header className="header" style={{ padding: 0, background: "#fff" }}>
          <MenuTop />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
