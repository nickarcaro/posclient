import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { registerApi } from "../../../api/user";

const SubcribeForm = () => {
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      formData.username = formData.email;
      console.log(formData);
      const response = await registerApi(formData);
      if (response?.jwt) {
        notification["success"]({
          message: "registro exitoso",
        });
        history.replace("/");
      } else {
        notification["success"]({
          message: "Eror al registrar usuario",
        });
      }
      setLoading(false);
    },
  });
  return (
    <Form name="register" onFinish={formik.handleSubmit}>
      <Form.Item label="Nombre">
        <Input name="name" type="text" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Apellidos">
        <Input name="lastname" type="text" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Correo electronico">
        <Input name="email" type="text" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Contraseña">
        <Input.Password
          name="password"
          type="password"
          onChange={formik.handleChange}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Registrarse
        </Button>
      </Form.Item>
    </Form>
  );
};

function initialValues() {
  return {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
export default SubcribeForm;
