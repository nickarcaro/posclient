import React, { useState } from "react";
import { Form, Button, Input, notification, InputNumber } from "antd";
import { useFormik } from "formik";
import useAuth from "../../../../hooks/useAuth";
import * as Yup from "yup";

import { addSupplier, updateSupplier } from "../../../../api/suppliers";

const SupplierForm = ({
  setShowModal,
  setReloadSuppliers,
  newSupplier,
  supplier,
}) => {
  const [loading, setLoading] = useState(false);
  const { logout, store } = useAuth();

  const formik = useFormik({
    initialValues: {
      nombre: supplier?.nombre || "",
      rut: supplier?.rut || "",
      telefono: supplier?.telefono || "",
      email: supplier?.email || "",
      direccion: supplier?.direccion || "",
    },
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      newSupplier ? createSupplier(formData) : modifySupplier(formData);
    },
  });

  const createSupplier = async (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      almacen: store,
    };
    const response = await addSupplier(formDataTemp, logout);
    formik.resetForm();

    if (!response) {
      notification["error"]({
        message: "error",
      });
      setLoading(false);
    } else {
      notification["success"]({
        message: "Proveedor creado",
      });
      setReloadSuppliers(true);
      setLoading(false);
      setShowModal(false);
    }
  };
  const modifySupplier = (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      almacen: store,
    };
    const response = updateSupplier(supplier.id, formDataTemp, logout);

    if (!response) {
      notification["error"]({
        message: "error",
      });
      setLoading(false);
    } else {
      formik.resetForm();
      notification["success"]({
        message: "Proveedor modificado",
      });
      setReloadSuppliers(true);
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
          name="nombre"
          placeholder="Nombre"
          onChange={formik.handleChange}
          value={formik.values.nombre}
        />
      </Form.Item>
      <Form.Item>
        <Input
          id="rut"
          type="text"
          name="rut"
          placeholder="Rut"
          onChange={formik.handleChange}
          value={formik.values.rut}
        />
      </Form.Item>
      <Form.Item>
        <Input
          id="telefono"
          type="text"
          name="telefono"
          placeholder="Teléfono"
          onChange={formik.handleChange}
          value={formik.values.telefono}
        />
      </Form.Item>
      <Form.Item>
        <Input
          id="email"
          type="text"
          name="email"
          placeholder="Correo"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Form.Item>

      <Form.Item>
        <Input
          id="direccion"
          type="text"
          name="direccion"
          placeholder="Dirección"
          onChange={formik.handleChange}
          value={formik.values.direccion}
        />
      </Form.Item>

      <div className="actions">
        <Button type="primary" htmlType="submit" loading={loading}>
          {newSupplier ? "Crear producto" : "Actualizar producto"}
        </Button>
      </div>
    </Form>
  );
};

function validationSchema() {
  return {
    nombre: Yup.string().required(true),
  };
}
export default SupplierForm;
