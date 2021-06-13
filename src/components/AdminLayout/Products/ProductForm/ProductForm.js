import React, { useState } from "react";
import { Form, Button, Input, notification } from "antd";
import { useFormik } from "formik";
import useAuth from "../../../../hooks/useAuth";
import useStore from "../../../../hooks/useStore";
import * as Yup from "yup";

import { addProduct, updateStore } from "../../../../api/products";

const ProductForm = ({
  setShowModal,
  setReloadProducts,
  newProduct,
  product,
}) => {
  const [loading, setLoading] = useState(false);
  const { logout, setReloadUser } = useAuth();
  const { store, setReloadStore } = useStore();

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

    if (!response) {
      notification["error"]({
        message: "error",
      });
      setLoading(false);
    } else {
      notification["success"]({
        message: "Producto creado",
      });
      setReloadUser(true);
      setReloadStore(true);
      setReloadProducts(true);
      setLoading(false);
      formik.resetForm();
      setShowModal(false);
    }
  };
  const modifyProduct = (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      almacen: store.id,
    };
    const response = updateStore(product._id, formDataTemp, logout);

    if (!response) {
      notification["error"]({
        message: "error",
      });
      setLoading(false);
    } else {
      notification["success"]({
        message: "Producto modificado",
      });
      formik.resetForm();

      setReloadUser(true);
      setReloadStore(true);
      setReloadProducts(true);
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <Form onFinish={formik.handleSubmit}>
      <Input
        name="nombre"
        type="text"
        placeholder="Nombre"
        onChange={formik.handleChange}
        value={formik.values.nombre}
      />
      <div className="actions">
        <Button htmlType="submit" loading={loading}>
          {newProduct ? "Crear producto" : "Actualizar producto"}
        </Button>
      </div>
    </Form>
  );
};

function initialValues(product) {
  return {
    nombre: product?.nombre || "",
  };
}

function validationSchema() {
  return {
    nombre: Yup.string().required(true),
  };
}

export default ProductForm;
