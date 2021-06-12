import React, { useState, useEffect } from "react";
import { List, Avatar, Button } from "antd";
import { size } from "lodash";
import { getProducts } from "../../../../api/products";
import useAuth from "../../../../hooks/useAuth";
import useStore from "../../../../hooks/useStore";

const ListProducts = ({ reloadProducts, setReloadProducts, openModal }) => {
  const [products, setProducts] = useState(null);
  const { logout } = useAuth();
  const { store } = useStore();

  useEffect(() => {
    (async () => {
      const response = await getProducts(store.id, logout);
      setProducts(response || []);
      setReloadProducts(false);
    })();
  }, [reloadProducts, setReloadProducts, logout, setProducts]);

  if (!products) return null;
  console.log(products);
  return (
    <div className="list-address">
      {size(products) === 0 ? (
        <h3>No hay ninguna dirección creada</h3>
      ) : (
        <List
          style={{ marginTop: 20 }}
          itemLayout="horizontal"
          dataSource={products}
          renderItem={(product) => (
            <Product
              product={product}
              logout={logout}
              setReloadProducts={setReloadProducts}
              openModal={openModal}
            />
          )}
        />
      )}
    </div>
  );
};

const Product = ({ product, openModal }) => {
  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          onClick={() => openModal(`Editar: ${product.nombre}`, product)}
        >
          Editar
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={`
              ${product.nombre} 
              
          `}
        description={product.estado}
      />
    </List.Item>
  );
};

export default ListProducts;
