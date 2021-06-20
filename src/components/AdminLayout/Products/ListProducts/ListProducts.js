import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import { size } from "lodash";
import { getProducts } from "../../../../api/products";
import useAuth from "../../../../hooks/useAuth";

const ListProducts = ({ reloadProducts, setReloadProducts, openModal }) => {
  const [products, setProducts] = useState(null);
  const { logout, store } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getProducts(store.id, logout);
      setProducts(response || []);
      setReloadProducts(false);
    })();
  }, [reloadProducts, setProducts, store.id, setReloadProducts, logout]);

  if (!products) return null;

  return (
    <div className="list-address">
      {size(products) === 0 ? (
        <h3>No hay productos</h3>
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
             Nombre: ${product.nombre} 
            
          `}
        description={` Estado:
        ${product.estado}, Precio:
        ${product.precio_actual},
        Stock:${product.stock_actual}
        
    `}
      />
    </List.Item>
  );
};

export default ListProducts;
