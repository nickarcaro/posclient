import React, { useState, useEffect } from "react";
import { Button, Layout } from "antd";
import { useHistory, Redirect } from "react-router-dom";
import ListStores from "../../../components/UserLayout/ListStores";
import AddStore from "../../../components/UserLayout/AddStore";
import Modal from "../../../components/Modal";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";
import useStore from "../../../hooks/useStore";

const Stores = () => {
  const [user, setUser] = useState(undefined);
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [reloadStores, setReloadStores] = useState(false);
  const { store } = useStore();
  const { auth, logout } = useAuth();
  const { Content } = Layout;

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response || null);
    })();
  }, [auth, setUser, logout]);

  if (user === undefined) return null;
  if (!auth && !user) {
    history.replace("/");
    return null;
  }

  const openModal = (title, store) => {
    setTitleModal(title);
    setFormModal(
      <AddStore
        setShow={setShow}
        setReloadStores={setReloadStores}
        newStore={store ? false : true}
        store={store || null}
      />
    );
    setShow(true);
  };

  if (store) {
    return <Redirect to={`/pos/${store.slug}`} />;
  }

  return (
    <section className="page-wrapper page1">
      <div>
        <Button type="primary" onClick={() => openModal("Nuevo Almacen")}>
          Añadir Almacen
        </Button>
      </div>
      <div>
        <Content style={{ padding: "0 24px", minHeight: 280, marginTop: 20 }}>
          <ListStores
            reloadStores={reloadStores}
            setReloadStores={setReloadStores}
            openModal={openModal}
          />
        </Content>
      </div>
      <Modal show={show} setShow={setShow} title={titleModal}>
        {formModal}
      </Modal>
    </section>
  );
};

export default Stores;
