import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useHistory, useParams } from "react-router-dom";
import ListStores from "../../../components/UserLayout/ListStores";
import AddStore from "../../../components/UserLayout/AddStore";
import Modal from "../../../components/Modal";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";

const Stores = () => {
  const [user, setUser] = useState(undefined);
  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [reloadStores, setReloadStores] = useState(false);
  const { nameStore } = useParams();
  console.log(nameStore);

  const { auth, logout } = useAuth();
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
  return (
    <section className="page-wrapper page1">
      <div>
        <Button type="primary" onClick={() => openModal("Nuevo Almacen")}>
          Añadir Almacen
        </Button>
      </div>
      <div>
        list store
        <ListStores
          reloadStores={reloadStores}
          setReloadStores={setReloadStores}
          openModal={openModal}
        />
      </div>
      <Modal show={show} setShow={setShow} title={titleModal}>
        {formModal}
      </Modal>
    </section>
  );
};

export default Stores;
