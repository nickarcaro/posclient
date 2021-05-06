import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../../hooks/useAuth";
import { loginApi } from "../../../api/user";

const LoginForm = ({ showForgotPass, onCloseModal }) => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      formData.username = "pepe";
      const response = await loginApi(formData);
      onCloseModal();
      if (response?.jwt) {
        notification["success"]({
          message: "Login correcto.",
        });
        login(response.jwt);
      } else {
        notification["error"]({
          message: "El email o la contraseña son incorrectos",
        });
      }
    },
  });

  return (
    <Form style={{ maxWidth: 500 }} onFinish={formik.handleSubmit}>
      <Form.Item>
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          name="identifier"
          type="text"
          placeholder="Correo electrónico"
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="button"
          className="login-form-forgot"
          onClick={showForgotPass}
        >
          ¿Has olvidado la contraseña?
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Iniciar Sesión
        </Button>
        O <div>suscribete!</div>
      </Form.Item>
    </Form>
  );
};

function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

function validationSchema() {
  return {
    identifier: Yup.string()
      .email("El email no es valido")
      .required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatorio"),
  };
}
export default LoginForm;
