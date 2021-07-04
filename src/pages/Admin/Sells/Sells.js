import useAuth from "../../../hooks/useAuth";
import ListSells from "../../../components/AdminLayout/Sells/ListSells";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { Layout } from "antd";

const Sells = ({ match }) => {
  const { Content } = Layout;
  const history = useHistory();
  const { namestore } = match.params;
  const { store } = useAuth();

  if (namestore !== store.slug || !store) {
    history.replace("/pos");
    return null;
  }
  return (
    <Content>
      <Layout
        className="site-layout-background"
        style={{ padding: "24px 0", background: "#fff", marginTop: 20 }}
      >
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Configuration />
        </Content>
      </Layout>
    </Content>
  );
};

const Configuration = () => {
  const [reloadSells, setReloadSells] = useState(false);
  return (
    <>
      <div>
        <h3>Historial de ventas</h3>
      </div>
      <br />
      <ListSells reloadSells={reloadSells} setReloadSells={setReloadSells} />
    </>
  );
};
export default Sells;
