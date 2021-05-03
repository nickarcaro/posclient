import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

import { resetPasswordApi } from "../../../api/user";

const ForgotPass = ({ showLoginForm, onCloseModal }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      formik.setErrors({});
      setLoading(true);
      const response = await resetPasswordApi(formData);
      if (response?.jwt) {
        notification["success"]({
          message: `se ha enviado correo a ${formData}`,
        });

        onCloseModal();
      } else {
        notification["error"]({
          message: "El email incorrecto",
        });
      }
      setLoading(false);
    },
  });

  return (
    <Form
      name="normal_login"
      className="login-form"
      onFinish={formik.handleSubmit}
    >
      <Form.Item>
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          name="identifier"
          type="text"
          placeholder="Correo electrónico"
          onChange={formik.handleChange}
          error={formik.errors.identifier}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          className="login-form-button"
          loading={loading}
          htmlType="submit"
        >
          Recuperar Contraseña
        </Button>
        o
        <Button type="button" onClick={showLoginForm}>
          Iniciar sesión
        </Button>
      </Form.Item>
    </Form>
  );
};

function initialValues() {
  return {
    identifier: "",
  };
}

function validationSchema() {
  return {
    identifier: Yup.string().email(true).required(true),
  };
}
export default ForgotPass;
