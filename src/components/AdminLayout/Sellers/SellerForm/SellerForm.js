import React, { useState } from "react";
import { Form, Button, Input, notification, Select } from "antd";
import { useFormik } from "formik";
import useAuth from "../../../../hooks/useAuth";
import * as Yup from "yup";

import { addSeller, updateSeller } from "../../../../api/sellers";

const SellerForm = ({ setShowModal, setReloadSellers, newSeller, seller }) => {
  const [loading, setLoading] = useState(false);
  const { logout, store } = useAuth();
  const { Option } = Select;

  const formik = useFormik({
    initialValues: newSeller ? initialValuesCreate() : initialValues(seller),
    validationSchema: newSeller
      ? Yup.object(validationSchemaCreate())
      : Yup.object(validationSchema()),
    onSubmit: (formData) => {
      newSeller ? createSeller(formData) : modifySeller(formData);
    },
  });

  const createSeller = async (formData) => {
    console.log("daro", formData);
    setLoading(true);
    const formDataTemp = {
      ...formData,
      almacen: store,
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
      <Form.Item name="name">
        <Input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={formik.handleChange}
          value={formik.values.nombre}
        />
      </Form.Item>
      <Form.Item name="apellido">
        <Input
          type="text"
          name="apellido"
          placeholder="Apellidos"
          onChange={formik.handleChange}
          value={formik.values.apellido}
        />
      </Form.Item>
      <Form.Item name="email">
        <Input
          type="text"
          name="email"
          placeholder="Nombre"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Form.Item>
      <Form.Item>
        <Select name="estado" onChange={formik.handleChange}>
          <Option value="activo">Activo</Option>
          <Option value="inactivo">Inactivo</Option>
        </Select>
      </Form.Item>
      <Form.Item name="password">
        <Input.Password
          name="password"
          placeholder="Contraseña"
          onChange={formik.handleChange}
        />
      </Form.Item>
      <div className="actions">
        <Button type="primary" htmlType="submit" loading={loading}>
          {newSeller ? "Crear vendedor" : "Actualizar vendedor"}
        </Button>
      </div>
    </Form>
  );
};

function initialValuesCreate() {
  return {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    estado: "activo",
  };
}

function initialValues(seller) {
  return {
    nombre: seller?.nombre || "",
    apellido: seller?.apellido || "",
    email: seller?.email || "",
    password: "",
    estado: "activo",
  };
}

function validationSchemaCreate() {
  return {
    nombre: Yup.string().required(true),
    apellido: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}

function validationSchema() {
  return {
    nombre: Yup.string(),

    apellido: Yup.string(),
    email: Yup.string().email(true),
    password: Yup.string(),
  };
}

export default SellerForm;
