import React, { useState, useEffect } from "react";
import { List, Button, Switch, Divider, Row, Col } from "antd";
import { size } from "lodash";
import { getSells } from "../../../../api/sells";
import { getSellsDetail } from "../../../../api/sellsdetail";
import useAuth from "../../../../hooks/useAuth";
import { PlusSquareTwoTone } from "@ant-design/icons";
import Modal from "../../../Modal";
import moment from "moment";


export const getPromotionDiscount = (promotion) => {
  let totalOriginal = 0;
  for (const prodProm of promotion.productos_promocion) {
    totalOriginal += prodProm.producto.precio_actual * prodProm.cantidad;
  }
  return totalOriginal - promotion.precio_promocion;
};

export const getSubTotal = (sale) => {
  let subTotal = parseInt(sale.total);
  for (const prom of sale.promocions) {
    console.log("promocion: ", prom);
    console.log("descuento: ", getPromotionDiscount(prom));
    subTotal += getPromotionDiscount(prom);
  }
  return subTotal;
};

/**
 * 
 * Componente de lista de ventas
 * 
 */

const ListSells = ({ reloadSells, setReloadSells }) => {
  const [sells, setSells] = useState(null);
  const { logout, store } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getSells(store.id, logout);
      setSells(response.sort((a, b) => b.id - a.id) || []);
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
          renderItem={(sell) => <Sell sell={sell} />}
        />
      )}
    </div>
  );
};

const Sell = ({ sell }) => {
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
  }, [setSellsDetail, sell.id, logout]);

  const openModal = (title) => {
    setTitleModal(title);
    setFormModal(
      <>
        <Divider>Productos</Divider>
        <List
          itemLayout="horizontal"
          dataSource={sellsDetail}
          footer={
            <Row>
              <Col span={12}>
                {sell.promocions.length > 0 ? (
                  <h4>Sub-Total</h4>
                ) : (
                  <h4>Total</h4>
                )}
              </Col>
              <Col span={12}>
                <h4 style={{ float: "right" }}>${getSubTotal(sell)}</h4>
              </Col>
            </Row>
          }
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={` Producto: ${item.producto.nombre}, Cantidad: ${item.cantidad}, Precio unitario: ${item.precio_unitario}, Precio total: ${item.precio_total}`}
              />
            </List.Item>
          )}
        />
        {sell.promocions.length > 0 ? (
          <>
            <Divider>Promociones</Divider>
            <List
              itemLayout="horizontal"
              footer={
                <Row>
                  <Col span={12}>
                    <h3>Total</h3>
                  </Col>
                  <Col span={12}>
                    <h3 style={{ float: "right" }}>${sell.total}</h3>
                  </Col>
                </Row>
              }
              dataSource={sell.promocions}
              renderItem={(promocion) => (
                <List.Item>
                  <List.Item.Meta
                    title={` ${promocion.nombre}, Valor: $${
                      promocion.precio_promocion
                    }, Descuento: $${getPromotionDiscount(promocion)}`}
                  />
                </List.Item>
              )}
            />
          </>
        ) : null}
      </>
    );
    setShowModal(true);
  };
  return (
    <List.Item>
      <List.Item.Meta
        title={`
        
            Fecha: ${moment(sell.fecha).format("DD/MM/YYYY , h:mm:ss a")}
           
          `}
        description={` 
           Precio: ${sell.total},
           Medio de pago: ${sell.medio_pago}    
        `}
      />
      <Button
        type="primary"
        size="large"
        onClick={() => openModal("Detalle de venta")}
        icon={<PlusSquareTwoTone />}
      >
        Detalle {}
      </Button>
      <Modal show={showModal} setShow={setShowModal} title={titleModal}>
        {formModal}
      </Modal>
    </List.Item>
  );
};

export default ListSells;
