import React, { useState, useEffect } from "react";
import QueueAnim from "rc-queue-anim";
import { size } from "lodash";
import { Row, Button, Card, Spin, List } from "antd";
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
        <List
          style={{ marginTop: 20 }}
          grid={{ gutter: [16, 16], column: 4 }}
          dataSource={stores}
          renderItem={(store) => (
            <QueueAnim
              component={Row}
              type="bottom"
              className="page row text-center"
              style={{ margin: 10 }}
              delay={500}
            >
              <Store
                store={store}
                logout={logout}
                setReloadStores={setReloadStores}
                openModal={openModal}
                loginStore={loginStore}
              />
            </QueueAnim>
          )}
        />
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
