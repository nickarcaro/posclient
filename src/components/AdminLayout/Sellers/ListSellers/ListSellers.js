import React, { useState, useEffect } from "react";
import { List, Button, Switch } from "antd";
import { size } from "lodash";
import useAuth from "../../../../hooks/useAuth";
import { getSellers } from "../../../../api/sellers";
/**
 * Componente de lista de vendedores
 
 */
const ListSellers = ({ reloadSellers, setReloadSellers, openModal }) => {
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
            <Seller seller={seller} openModal={openModal} />
          )}
        />
      )}
    </div>
  );
};

const Seller = ({ seller, openModal }) => {
  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          onClick={() => openModal(`Editar: ${seller.name}`, seller)}
        >
          Editar
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={`
           Nombre: ${seller.name} ${seller.lastname}
             
        `}
        description={` Estado:
      ${seller.confirmed}, Correo:
      ${seller.email}
      
  `}
      />
    </List.Item>
  );
};

export default ListSellers;
