import React, { useState, useEffect } from "react";
import {  List, Button, Switch } from "antd";
import { size } from "lodash";
import { getSells } from "../../../../api/sells";
import { getSellsDetail } from "../../../../api/sellsdetail";
import useAuth from "../../../../hooks/useAuth";
import { PlusSquareTwoTone } from "@ant-design/icons"
import Modal from "../../../Modal";

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
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [sellsDetail, setSellsDetail] = useState(null);
  const { logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getSellsDetail(sell.id, logout);
      setSellsDetail(response || []);
    })();
  }, [ setSellsDetail, sell.id, logout]);

  const openModal = (title) => {
    setTitleModal(title);
    setFormModal(
      <List
        itemLayout="horizontal"
        dataSource={sellsDetail}
    
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              description= {` Producto: ${item.producto.nombre}, Cantidad: ${item.cantidad}, Precio unitario: ${item.precio_unitario}, Precio total: ${item.precio_total}, Valor IVA: ${Valor_IVA}`}
            />
          </List.Item>
        )}
      />,   
    );
    setShowModal(true);
  };
  return (
    <List.Item
      actions={[
        <Switch defaultChecked onChange={() => setActivate(!activate)} />,
      ]}
    >
      <List.Item.Meta
        title={`
            Fecha: ${sell.fecha}
           
          `}
        description=
        {` 
           Precio: ${sell.total},
           Medio de pago: ${sell.medio_pago}    
        `}
      />
      <Button type="primary" size="large" onClick={() => openModal("Detalle de venta")} icon={<PlusSquareTwoTone />}>Detalle { }</Button>
      <Modal show={showModal} setShow={setShowModal} title={titleModal}>
        {formModal}
      </Modal>
    </List.Item>
  );
};

export default ListSells;
