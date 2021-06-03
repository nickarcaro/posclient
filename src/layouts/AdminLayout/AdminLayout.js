import React, { useState } from "react";
import { Layout } from "antd";
//components (sider y menutop)
import MenuSider from "../../components/AdminLayout/MenuSider";
import MenuTop from "../../components/AdminLayout/MenuTop";

//componente layout , toma componente de página (paginas de /pages/admin)
const AdminLayout = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  //estados, cuando se apreta el boton del nav vertical de abajo (ese estado se manda al componente menusider)
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
