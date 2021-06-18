import React, { useState, useEffect } from "react";
import { List, Button, Switch } from "antd";
import { size } from "lodash";
import { getSells } from "../../../../api/sells";
import useAuth from "../../../../hooks/useAuth";

const ListSells = ({ reloadSells, setReloadSells }) => {
  const [activate, setActivate] = useState(true);
  const [sells, setSells] = useState(null);
  const { logout, store } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getSells(store.id, logout);
      setSells(response || []);
      setReloadSells(false);
    })();
  }, [reloadSells, setSells, store.id, setReloadSells, logout]);

  if (!sells) return null;

  return (
    <div className="list-address">
      {size(sells) === 0 ? (
        <h3>No hay ventas</h3>
      ) : (
        <List
          style={{ marginTop: 20 }}
          itemLayout="horizontal"
          dataSource={sells}
          renderItem={(sell) => (
            <Sell sell={sell} activate={activate} setActivate={setActivate} />
          )}
        />
      )}
    </div>
  );
};

const Sell = ({ sell, activate, setActivate }) => {
  return (
    <List.Item
      actions={[
        <Switch defaultChecked onChange={() => setActivate(!activate)} />,
      ]}
    >
      <List.Item.Meta
        title={`
             Nombre: ${sell.nombre} 
            
          `}
        description={` Estado:
        ${sell.estado}, Precio:
        ${sell.precio}
        
    `}
      />
    </List.Item>
  );
};

export default ListSells;
