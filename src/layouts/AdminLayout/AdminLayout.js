import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import MenuSider from "../../components/AdminLayout/MenuSider";
import MenuTop from "../../components/AdminLayout/MenuTop";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user";
import { useHistory } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const [user, setUser] = useState(undefined);
  const { auth, logout, setReloadUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response || null);
    })();
  }, [auth]);

  if (user === undefined) return null;
  if (!auth && !user) {
    history.replace("/");
    return null;
  }
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
