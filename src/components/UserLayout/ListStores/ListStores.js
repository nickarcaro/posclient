import React, { useState, useEffect } from "react";
import QueueAnim from "rc-queue-anim";
import { map, size } from "lodash";
import { Row, Col, Button } from "antd";
import { getStores } from "../../../api/store";
import useAuth from "../../../hooks/useAuth";

const ListStores = ({ setReloadStores, reloadStores, openModal }) => {
  const [stores, setStores] = useState(null);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await getStores(auth.idUser, logout);
      setStores(response || []);
      setReloadStores(false);
    })();
  }, [reloadStores, logout, setReloadStores, auth.idUser]);

  if (!stores) return null;
  return (
    <div className="list-address">
      {size(stores) === 0 ? (
        <h3>No hay Almacenes</h3>
      ) : (
        <div>
          <QueueAnim
            component={Row}
            type="bottom"
            className="page row text-center"
            delay={500}
          >
            {map(stores, (store) => (
              <Col
                className="card-wrapper"
                md={8}
                lg={8}
                xl={8}
                xs={24}
                key={store.id}
              >
                <Store
                  store={store}
                  logout={logout}
                  setReloadStores={setReloadStores}
                  openModal={openModal}
                />
              </Col>
            ))}
          </QueueAnim>
        </div>
      )}
    </div>
  );
};

const Store = ({ store, logout, setReloadStores, openModal }) => {
  console.log(store);
  return (
    <div className="address">
      <p>{store.nombre}</p>
      <p>{store.estado}</p>

      <div className="actions">
        <Button onClick={() => openModal(`Editar: ${store.nombre}`, store)}>
          Editar
        </Button>
      </div>
    </div>
  );
};
export default ListStores;
