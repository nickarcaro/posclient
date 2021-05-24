import React, { useState } from "react";
import { Form, Button, Input, notification } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateNameApi } from "../../../api/user";

const ChangeNameForm = ({ user, logout, setReloadUser }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(user.name, user.lastname),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateNameApi(user.id, formData, logout);
      if (!response) {
        notification["error"]({
          message: "error cambiar nombre y apellido",
        });
      } else {
        setReloadUser(true);
        notification["success"]({
          message: "Nombre modificado",
        });
      }
      setLoading(false);
    },
  });

  return (
    <div className="change-name-form">
      <h4>Cambia tu nombre y apellidos</h4>
      <Form onFinish={formik.handleSubmit}>
        <Form.Item>
          <Input
            name="name"
            placeholder="Tu nuevo nombre"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Input
            name="lastname"
            placeholder="Tus nuevos apellidos"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
        </Form.Item>
        <Button htmlType="submit" loading={loading}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
};

function initialValues(name, lastname) {
  return {
    name: name || "",
    lastname: lastname || "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
  };
}
export default ChangeNameForm;
