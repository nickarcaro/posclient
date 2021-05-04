import React, { useState } from "react";
import { Layout } from "antd";
import MenuSider from "../../components/AdminLayout/MenuSider";

import { LoadRoutes } from "../LoadRoutes";

import MenuTop from "../../components/AdminLayout/MenuTop";

const AdminLayout = ({ routes }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuSider menuCollapsed={menuCollapsed} />

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
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
