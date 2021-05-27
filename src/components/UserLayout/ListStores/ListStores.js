import React, { useState, useEffect } from "react";
import QueueAnim from "rc-queue-anim";
import { map, size } from "lodash";
import { Row, Col, Button, Card, Avatar, Spin } from "antd";
import { useParams, useHistory, Link, Redirect } from "react-router-dom";

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
        <div>
          <QueueAnim
            component={Row}
            type="bottom"
            className="page row text-center"
            delay={500}
          >
            {map(stores, (store) => (
              <Col md={4} key={store.id}>
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
  const { Meta } = Card;

  console.log(store);
  return (
    <Card>
      <Meta title={store.nombre} description={store.estado} />

      <div className="actions">
        <Button onClick={() => openModal(`Editar: ${store.nombre}`, store)}>
          Editar
        </Button>
        <Button>
          <Link to={`pos/${store.slug}`}>{store.nombre}</Link>
        </Button>
      </div>
    </Card>
  );
};
export default ListStores;
