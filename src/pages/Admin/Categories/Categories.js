import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";

const Categories = ({ match }) => {
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
          <div>
            <button>Añadir Categoria</button> <span />
            <button>buscar Categoria</button> <span />
          </div>
          <br />
          <div>listar Categorias</div>
        </Content>
      </Layout>
    </Content>
  );
};

export default Categories;
