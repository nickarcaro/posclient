import React, { useState, useEffect, useCallback } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import useAuth from "../../../../hooks/useAuth";

const EditSeller = ({ setReloadSellers, seller, setShowModal }) => {
  const [sellerData, setSellerData] = useState({});
  const [loading, setLoading] = useState(false);
  const { logout, store } = useAuth();
  const { Option } = Select;

  useEffect(() => {
    setSellerData({
      nombre: seller.nombre,
      apellido: seller.apellido,
      email: seller.email,
      password: seller.password,
      estado: seller.estado,
      id: seller.id,
    });
  }, [seller, setSellerData]);

  const updateSeller = async (e) => {
    let formData = sellerData;
    const formDataTemp = {
      ...formData,
      almacen: store,
    };

    const response = await updateSeller(seller.id, formDataTemp, logout);

    if (!response) {
      notification["error"]({
        message: "error",
      });
    } else {
      notification["success"]({
        message: "Producto modificado",
      });
      setReloadSellers(true);
      setShowModal(false);
    }
  };
  return (
    <Form className="form-edit" onSubmitCapture={updateSeller}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Nombre"
              value={sellerData.nombre}
              onChange={(e) =>
                setSellerData({ ...sellerData, nombre: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Apellidos"
              value={sellerData.apellido}
              onChange={(e) =>
                setSellerData({ ...sellerData, apellido: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              placeholder="Correo electronico"
              value={sellerData.email}
              onChange={(e) =>
                setSellerData({ ...sellerData, email: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Estado"
              onChange={(e) => setSellerData({ ...sellerData, estado: e })}
              value={sellerData.estado}
            >
              <Option value="activo">Activo</Option>
              <Option value="inactivo">Inactivo</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input.Password
              type="password"
              placeholder="Contraseña"
              onChange={(e) =>
                setSellerData({ ...sellerData, password: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12} />
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar Vendedor
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditSeller;
