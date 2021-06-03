import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";

const Products = () => {
  const { Content } = Layout;
  const [user, setUser] = useState(undefined);
  const { auth, logout, setReloadUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth, setUser, logout]);

  if (user === undefined) return null;
  if (!auth && !user) {
    history.replace("/");
    return null;
  }
  return (
    <Content>
      <Layout
        className="site-layout-background"
        style={{ padding: "24px 0", background: "#ff2" }}
      >
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <div>productos</div>
        </Content>
      </Layout>
    </Content>
  );
};

export default Products;
