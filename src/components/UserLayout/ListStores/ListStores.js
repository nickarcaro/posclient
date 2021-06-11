import React, { useState, useEffect } from "react";
import QueueAnim from "rc-queue-anim";
import { map, size } from "lodash";
import { Row, Col, Button, Card, Spin } from "antd";
import { getStores } from "../../../api/store";
import useAuth from "../../../hooks/useAuth";
import useStore from "../../../hooks/useStore";

const ListStores = ({ setReloadStores, reloadStores, openModal }) => {
  const [stores, setStores] = useState(null);
  const { auth, logout } = useAuth();
  const { loginStore } = useStore();

  useEffect(() => {
    (async () => {
      const response = await getStores(auth.idUser, logout);
      setStores(response || []);
      setReloadStores(false);
    })();
  }, [reloadStores, logout, setReloadStores, auth.idUser]);
  if (!stores)
    return (
      <Spin
        tip="Cargando almacenes..."
        style={{ width: "100%", padding: "200px 0" }}
      />
    );

  return (
    <div className="list-address">
      {size(stores) === 0 ? (
        <h3>No hay Almacenes</h3>
      ) : (
        <QueueAnim
          component={Row}
          type="bottom"
          className="page row text-center"
          style={{ margin: 10 }}
          delay={500}
        >
          {map(stores, (store) => (
            <Col
              md={4}
              key={store.id}
              offset={1}
              span={6}
              style={{ padding: "8px" }}
            >
              <Store
                store={store}
                logout={logout}
                setReloadStores={setReloadStores}
                openModal={openModal}
                loginStore={loginStore}
              />
            </Col>
          ))}
        </QueueAnim>
      )}
    </div>
  );
};

const Store = ({ store, logout, setReloadStores, openModal, loginStore }) => {
  const [loading, setLoading] = useState(false);
  const accessStore = (store) => {
    setLoading(true);
    loginStore(store);
    setLoading(false);
  };

  const { Meta } = Card;
  return (
    <Card
      style={{ width: 250 }}
      cover={<img alt="image" />}
      actions={[
        <Button onClick={() => openModal(`Editar: ${store.nombre}`, store)}>
          Editar
        </Button>,
        <Button onClick={() => accessStore(store)} loading={loading}>
          ingresar
        </Button>,
      ]}
    >
      <Meta title={store.nombre} description={`Estado: ${store.estado}`} />
    </Card>
  );
};
export default ListStores;
