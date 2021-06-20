import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { size } from "lodash";
import useAuth from "../../../../hooks/useAuth";
import { getSuppliers } from "../../../../api/suppliers";

const ListSuppliers = ({ reloadSuppliers, setReloadSuppliers, openModal }) => {
  const [suppliers, setSuppliers] = useState(null);
  const { logout, store } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getSuppliers(store.id, logout);
      setSuppliers(response || []);
      setReloadSuppliers(false);
    })();
  }, [reloadSuppliers, setSuppliers, store.id, setReloadSuppliers, logout]);

  if (!suppliers) return null;

  return (
    <div className="list-address">
      {size(suppliers) === 0 ? (
        <h3>No hay Proveedores</h3>
      ) : (
        <List
          style={{ marginTop: 20 }}
          itemLayout="horizontal"
          dataSource={suppliers}
          renderItem={(supplier) => (
            <Supplier
              supplier={supplier}
              logout={logout}
              setReloadSuppliers={setReloadSuppliers}
              openModal={openModal}
            />
          )}
        />
      )}
    </div>
  );
};

const Supplier = ({ supplier, logout, setReloadSuppliers, openModal }) => {
  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          onClick={() => openModal(`Editar: ${supplier.nombre}`, supplier)}
        >
          Editar
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={`
             Nombre: ${supplier.nombre} 
            
          `}
        description={` 
        Rut:
        ${supplier.rut}, Correo:
        ${supplier.email},
        Dirección:${supplier.direccion}
        
    `}
      />
    </List.Item>
  );
};
export default ListSuppliers;
