import React, { useState } from "react";
import { Form, Button, Input, notification } from "antd";
import { useFormik } from "formik";
import useAuth from "../../../hooks/useAuth";
import * as Yup from "yup";
import { addStore, updateStore } from "../../../api/store";
const AddStore = ({ setReloadStores, setShowModal, newStore, store }) => {
  const [loading, setLoading] = useState(false);
  const { auth, logout } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(store),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      newStore ? createStore(formData) : modifyStore(formData);
    },
  });

  const createStore = async (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      user: auth.idUser,
    };
    const response = await addStore(formDataTemp, logout);

    if (!response) {
      notification["error"]({
        message: "error",
      });
      setLoading(false);
    } else {
      formik.resetForm();
      setReloadStores(true);
      setLoading(false);
      setShowModal(false);
    }
  };
  const modifyStore = (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      user: auth.idUser,
    };
    const response = updateStore(store._id, formDataTemp, logout);

    if (!response) {
      notification["error"]({
        message: "error",
      });
      setLoading(false);
    } else {
      formik.resetForm();
      setReloadStores(true);
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
        value={formik.values.name}
      />
      <div className="actions">
        <Button className="submit" type="submit" loading={loading}>
          {newStore ? "Crear almacen" : "Actualizar almacen"}
        </Button>
      </div>
    </Form>
  );
};

function initialValues(store) {
  return {
    nombre: store?.nombre || "",
  };
}

function validationSchema() {
  return {
    nombre: Yup.string().required(true),
  };
}
export default AddStore;
