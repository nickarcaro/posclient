import useAuth from "../../../hooks/useAuth";
import React, { useState } from "react";
import ListSellers from "../../../components/AdminLayout/Sellers/ListSellers";
import SellerForm from "../../../components/AdminLayout/Sellers/SellerForm";
import { useHistory } from "react-router-dom";
import { Layout, Button } from "antd";
import Modal from "../../../components/Modal";

const Sellers = ({ match }) => {
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
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [reloadSellers, setReloadSellers] = useState(false);
  const openModal = (title, sellers) => {
    setTitleModal(title);
    setFormModal(
      <SellerForm
        setShowModal={setShowModal}
        setReloadSellers={setReloadSellers}
        newSeller={sellers ? false : true}
        seller={sellers || null}
      />
    );
    setShowModal(true);
  };

  return (
    <div>
      <Button onClick={() => openModal("Nuevo producto")}>
        Añadir Vendedor
      </Button>
      <ListSellers
        reloadSellers={reloadSellers}
        setReloadSellers={setReloadSellers}
        openModal={openModal}
      />
      <Modal show={showModal} setShow={setShowModal} title={titleModal}>
        {formModal}
      </Modal>
    </div>
  );
};
export default Sellers;
