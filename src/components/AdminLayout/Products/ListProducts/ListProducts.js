import React, { useState, useEffect } from "react";
import { List, Button, InputNumber } from "antd";
import { size } from "lodash";
import { getProducts } from "../../../../api/products";
import { getProduct } from "../../../../api/products";
import useAuth from "../../../../hooks/useAuth";
import Modal from "../../../Modal"
import { updateProduct } from "../../../../api/products";
import ReactDOM from 'react-dom';
import {addStockIn} from "../../../../api/products";

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
              productData={product}
              logout={logout}
              setReloadProducts={setReloadProducts}
              openModal2={openModal}
            />
          )}
        />
      )}
    </div>
  );
};

const Product = ({ productData, openModal2, setReloadProducts, logout }) => {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [product, setProduct] = useState(productData);
  const [actualValue, setActualValue] = useState(0);
  const [newValue, setNewValue] = useState(null);

  function onChange(value) {
    setActualValue(value)
  }


  useEffect(() => {

    const newValue = product.stock_actual + actualValue
    setProduct({ ...product, stock_actual: newValue })

  }, [newValue]);

  useEffect(() => {
    (async () => {
      const getProdu = await getProduct(product.id, logout)
      setProduct(getProdu)
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const getProdu = await updateProduct(product.id, product, logout)
      /*const stockEntry = {producto:product.id, cantidad:product.stock_actual}
      const asdf = await addStockIn(stockEntry, logout)*/
    })();
  }, [product]);

  const openModal = (title, type) => {
    setTitleModal(title);
    setFormModal
      (
        <div><div>{type} : <InputNumber onChange={onChange} />,;
        </div>

          <div> <Button type="primary" onClick={async () => {
            setNewValue(actualValue + product.stock_actual)
            
            setShowModal(false)
          }
          } > Confirmar</Button>
          </div>
        </div>

      );
    setShowModal(true);
  };

  return (

    <List.Item
      actions={[
        <Button
          type="primary"
          onClick={() => openModal("Modificar Stock", "Stock a agregar")
          }
        >
          Agregar Stock
        </Button>
        ,
        <Button
          type="primary"
          onClick={() => openModal("Modificar Stock", "Stock a quitar")}
        >
          Quitar Stock
        </Button>,
        <Button
          type="primary"
          onClick={() => openModal2(`Editar: ${product.nombre}`, product)}
        >
          Editar
        </Button>,
        <Modal show={showModal} setShow={setShowModal} title={titleModal}>
          {formModal}
        </Modal>,
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
