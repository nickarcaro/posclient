import React, { useState } from "react";
import { Form, Button, Input, notification } from "antd";
import { useFormik } from "formik";
import useAuth from "../../../../hooks/useAuth";
import * as Yup from "yup";

import { addProduct, updateStore } from "../../../../api/products";

const ProductForm = (props) => {
  const { setShowModal, setReloadProducts, newProduct, product } = props;
  const [loading, setLoading] = useState(false);
  const { logout, store } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(product),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      newProduct ? createProduct(formData) : modifyProduct(formData);
    },
  });

  const createProduct = async (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      almacen: store,
    };
    const response = await addProduct(formDataTemp, logout);
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
      setReloadProducts(true);
      setLoading(false);
      setShowModal(false);
    }
  };
  const modifyProduct = (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      almacen: store.id,
    };
    const response = updateStore(product.id, formDataTemp, logout);

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
      setReloadProducts(true);
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <Form onFinish={formik.handleSubmit}>
      <Form.Item name="name">
        <Input
          id="nombre"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </Form.Item>

      <div className="actions">
        <Button type="primary" htmlType="submit" loading={loading}>
          {newProduct ? "Crear producto" : "Actualizar producto"}
        </Button>
      </div>
    </Form>
  );
};

function initialValues(product) {
  return {
    name: product?.nombre || "",
  };
}

function validationSchema() {
  return {
    nombre: Yup.string().required(true),
  };
}

export default ProductForm;
