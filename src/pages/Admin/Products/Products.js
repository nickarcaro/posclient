import useStore from "../../../hooks/useStore";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import ListProducts from "../../../components/AdminLayout/Products/ListProducts";
const Products = ({ match }) => {
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
            <button>Nuevo Producto</button> <span />
            <button>buscar producto</button> <span />
            <button>añadir archivo.</button>
          </div>
          <br />
          <ListProducts />
        </Content>
      </Layout>
    </Content>
  );
};

export default Products;
