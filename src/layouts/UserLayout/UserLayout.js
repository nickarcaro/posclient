import { Layout } from "antd";
//componente menutop del userlayout
import MenuTop from "../../components/UserLayout/MenuTop";

/**
 * @param {component} children componente hijo(páginas de usuario antes de ingresar al almacen)
 */

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
