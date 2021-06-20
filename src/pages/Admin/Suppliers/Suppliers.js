import useAuth from "../../../hooks/useAuth";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Button } from "antd";
import Modal from "../../../components/Modal";

import ListSuppliers from "../../../components/AdminLayout/Suppliers/ListSuppliers";
import SupplierForm from "../../../components/AdminLayout/Suppliers/SupplierForm";
const Suppliers = ({ match }) => {
  const { Content } = Layout;
  const history = useHistory();
  const { namestore } = match.params;
  const { store } = useAuth();

  if (namestore !== store.slug || !store) {
    history.replace("/pos");
    return null;
  }
  console.log(store);
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
  const [reloadSuppliers, setReloadSuppliers] = useState(false);

  const openModal = (title, suppliers) => {
    setTitleModal(title);
    setFormModal(
      <SupplierForm
        setShowModal={setShowModal}
        setReloadSuppliers={setReloadSuppliers}
        newSupplier={suppliers ? false : true}
        supplier={suppliers || null}
      />
    );
    setShowModal(true);
  };

  return (
    <div>
      <Button onClick={() => openModal("Nuevo proveedor")}>
        Añadir Proveedor
      </Button>
      <ListSuppliers
        reloadSuppliers={reloadSuppliers}
        setReloadSuppliers={setReloadSuppliers}
        openModal={openModal}
      />
      <Modal show={showModal} setShow={setShowModal} title={titleModal}>
        {formModal}
      </Modal>
    </div>
  );
}

export default Suppliers;
