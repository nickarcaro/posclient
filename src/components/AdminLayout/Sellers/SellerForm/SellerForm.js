import React, { useState } from "react";
import { Form, Button, Input, notification, Row, Col } from "antd";
import { useFormik } from "formik";
import useAuth from "../../../../hooks/useAuth";
import * as Yup from "yup";

import { addSeller, updateSeller, createUser } from "../../../../api/sellers";

const SellerForm = ({ setShowModal, setReloadSellers, newSeller, seller }) => {
  const [loading, setLoading] = useState(false);
  const { logout, store } = useAuth();
  const formik = useFormik({
    initialValues: {
      name: seller?.name || "",
      lastname: seller?.lastname || "",
      email: seller?.email || "",
      password: "",
    },
    validationSchema: Yup.object().shape({}),
    onSubmit: (formData) => {
      newSeller ? createSeller(formData) : modifySeller(formData);
    },
  });

  const createSeller = async (formData) => {
    console.log(formData);
    setLoading(true);
    const formDataTemp = {
      ...formData,
      almacen: store.id,
      role: 3,
      confirmed: true,
      username: formData.email,
    };
    const response = await addSeller(formDataTemp, logout);
    formik.resetForm();

    if (!response) {
      notification["error"]({
        message: "error",
      });
      setLoading(false);
    } else {
      notification["success"]({
        message: "Producto creado",
      });
      setReloadSellers(true);
      setLoading(false);
      setShowModal(false);
    }
  };
  const modifySeller = (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      almacen: store,
    };
    const response = updateSeller(seller.id, formDataTemp, logout);

    if (!response) {
      notification["error"]({
        message: "error",
      });
      setLoading(false);
    } else {
      formik.resetForm();
      notification["success"]({
        message: "Producto modificado",
      });
      setReloadSellers(true);
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <Form onFinish={formik.handleSubmit}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="name">
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="apellido">
            <Input
              type="text"
              name="lastname"
              placeholder="Apellidos"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="email">
            <Input
              type="text"
              name="email"
              placeholder="Correo"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name="password">
            <Input.Password
              name="password"
              placeholder="Contraseña"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <div className="actions">
            <Button type="primary" htmlType="submit" loading={loading}>
              {newSeller ? "Crear vendedor" : "Actualizar vendedor"}
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default SellerForm;
