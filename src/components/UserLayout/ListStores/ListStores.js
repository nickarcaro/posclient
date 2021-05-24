import QueueAnim from "rc-queue-anim";
import { map, size } from "lodash";
import { Row, Col, Button } from "antd";
import React, { useState, useEffect } from "react";

import { getStores } from "../../../api/store";
import useAuth from "../../../hooks/useAuth";

const ListStores = ({ setReloadStores, reloadStores, openModal }) => {
  const { auth, logout } = useAuth();
  const [stores, setStores] = useState(null);

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
  return (
    <div className="address">
      <p>{store.nombre}</p>
      <p>{store.estado}</p>

      <div className="actions">
        <Button
          primary
          onClick={() => openModal(`Editar: ${store.nombre}`, store)}
        />
      </div>
    </div>
  );
};
export default ListStores;
