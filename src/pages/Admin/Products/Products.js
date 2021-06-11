import useStore from "../../../hooks/useStore";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Button } from "antd";
import ListProducts from "../../../components/AdminLayout/Products/ListProducts";
import ProductForm from "../../../components/AdminLayout/Products/ProductForm";
import Modal from "../../../components/Modal";
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
          <Configuration />
        </Content>
      </Layout>
    </Content>
  );
};

function Configuration() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [reloadProducts, setReloadProducts] = useState(false);

  const openModal = (title, products) => {
    setTitleModal(title);
    setFormModal(
      <ProductForm
        setShowModal={setShowModal}
        setReloadProducts={setReloadProducts}
        newProduct={products ? false : true}
        product={products || null}
      />
    );
    setShowModal(true);
  };

  return (
    <div>
      <Button onClick={() => openModal("Nuevo producto")}>
        Añadir Producto
      </Button>

      <ListProducts
        reloadProducts={reloadProducts}
        setReloadProducts={setReloadProducts}
        openModal={openModal}
      />
      <Modal show={showModal} setShow={setShowModal} title={titleModal}>
        {formModal}
      </Modal>
    </div>
  );
}
export default Products;
