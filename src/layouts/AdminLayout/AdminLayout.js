import React, { useState } from "react";
import { Layout } from "antd";
import { LoadRoutes } from "../LoadRoutes";
import MenuSider from "../../components/AdminLayout/MenuSider";
import MenuTop from "../../components/AdminLayout/MenuTop";

const AdminLayout = ({ routes }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuSider
        menuCollapsed={menuCollapsed}
        setMenuCollapsed={setMenuCollapsed}
      />
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }}>
          <MenuTop />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>POS Almacenes</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
