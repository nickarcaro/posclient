import React, { useState } from "react";
import { Layout } from "antd";
//components
import MenuSider from "../../components/AdminLayout/MenuSider";
import MenuTop from "../../components/AdminLayout/MenuTop";

const AdminLayout = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  //estados, si hay user, y cuando se apreta el boton del nav vertical de abajo
  const [menuCollapsed, setMenuCollapsed] = useState(false);

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
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer>POS Almacenes</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
