import useStore from "../../../hooks/useStore";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";

const Sells = ({ match }) => {
  const { Content } = Layout;
  const history = useHistory();
  const { namestore } = match.params;
  const { store } = useStore();

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
          <div>
            <button>buscar Venta</button> <span />
          </div>
          <br />
          <div>listar venta</div>
        </Content>
      </Layout>
    </Content>
  );
};

export default Sells;
