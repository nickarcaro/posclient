import React, { useState, useEffect } from "react";
import useStore from "../../../hooks/useStore";
import { useHistory } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import { getStoreById } from "../../../api/store";

import useAuth from "../../../hooks/useAuth";

const Dashboard = ({ match }) => {
  const { Content } = Layout;
  const { namestore } = match.params;
  const { store } = useStore();

  const history = useHistory();

  if (namestore !== store.slug || !store) {
    history.replace("/pos");
    return null;
  }
  if (store === undefined) return null;
  return (
    <Content>
      <Layout
        className="site-layout-background"
        style={{ padding: "24px 0", background: "#fff", marginTop: 20 }}
      >
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <div>Indicadores gráficos </div>
          {store.nombre}
        </Content>
      </Layout>
    </Content>
  );
};

export default Dashboard;
