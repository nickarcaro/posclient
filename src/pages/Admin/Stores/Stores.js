import Modal from "../../../components/Modal";
import { Button } from "antd";
import ListStores from "../../../components/UserLayout/ListStores";
import AddStore from "../../../components/UserLayout/AddStore";

import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";
import { useHistory } from "react-router-dom";

const Stores = () => {
  const [user, setUser] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [reloadStores, setReloadStores] = useState(false);

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
        setShowModal={setShowModal}
        setReloadStores={setReloadStores}
        newStore={store ? false : true}
        store={store || null}
      />
    );
    setShowModal(true);
  };
  return (
    <section className="page-wrapper page1">
      <div>
        <Button type="primary" onClick={() => openModal("Nuevo Almacen")} />
        <Modal show={showModal} setShow={setShowModal} title={titleModal}>
          {formModal}
        </Modal>
      </div>
      <div>
        list store
        <ListStores
          reloadStores={reloadStores}
          setReloadStores={setReloadStores}
          openModal={openModal}
        />
      </div>
    </section>
  );
};

export default Stores;

/*
 
  const [stores, setStores] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [reloadStores, setReloadStores] = useState(false);

  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getStores(auth.idUser, logout);
      setStores(response || []);
      setReloadStores(false);
    })();
  }, [reloadStores]);

  if (!stores) return null;

  const openModal = (title, stores) => {
    setTitleModal(title);
    setFormModal(
      <AddStore
        setShowModal={setShowModal}
        setReloadStores={setReloadStores}
        newstores={stores ? false : true}
        stores={stores || null}
      />
    );
    setShowModal(true);
  };

  return (
    <section className="page-wrapper page1">
      {size(stores) === 0 ? (
        <div>
          <h3>No hay almacenes</h3>
          <Button type="primary" onClick={() => openModal("Nuevo Almacen")} />
          <Modal show={showModal} setShow={setShowModal} title={titleModal}>
            {formModal}
          </Modal>
        </div>
      ) : (
        <ListStores
          stores={stores}
          logout={logout}
          reloadStores={reloadStores}
          setReloadStores={setReloadStores}
        />
      )}
    </section>
  ); */
