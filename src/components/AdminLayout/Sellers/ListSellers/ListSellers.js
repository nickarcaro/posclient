import React, { useState, useEffect } from "react";
import { List, Button, Switch } from "antd";
import { size } from "lodash";
import useAuth from "../../../../hooks/useAuth";
import { getSellers } from "../../../../api/sellers";

const ListSellers = ({ reloadSellers, setReloadSellers, editUserModal }) => {
  const [activate, setActivate] = useState(true);
  const [sellers, setSellers] = useState(null);
  const { logout, store } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getSellers(store.id, logout);
      setSellers(response || []);
      setReloadSellers(false);
    })();
  }, [reloadSellers, setSellers, store.id, setReloadSellers, logout]);

  if (!sellers) return null;

  return (
    <div className="list-address">
      {size(sellers) === 0 ? (
        <h3>No hay vendedores</h3>
      ) : (
        <List
          style={{ marginTop: 20 }}
          itemLayout="horizontal"
          dataSource={sellers}
          renderItem={(seller) => (
            <Seller
              seller={seller}
              activate={activate}
              setActivate={setActivate}
              editUserModal={editUserModal}
            />
          )}
        />
      )}
    </div>
  );
};

const Seller = ({ seller, activate, setActivate, editUserModal }) => {
  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          onClick={() => editUserModal(`Editar: ${seller.nombre}`, seller)}
        >
          Editar
        </Button>,
        <Switch defaultChecked onChange={() => setActivate(!activate)} />,
      ]}
    >
      <List.Item.Meta
        title={`
           Nombre: ${seller.apellido} 
          
        `}
        description={` Estado:
      ${seller.estado}, Precio:
      ${seller.email}
      
  `}
      />
    </List.Item>
  );
};

export default ListSellers;
