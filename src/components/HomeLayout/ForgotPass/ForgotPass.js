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
      setLoading(true);
      formik.setErrors({});
      const validateEmail = Yup.string().email().required();

      if (!validateEmail.isValidSync(formik.values.identifier)) {
        formik.setErrors({ identifier: true });
      } else {
        await resetPasswordApi(formik.values.identifier);
        notification["success"]({
          message: "se ha enviado correo.",
        });
      }
      setLoading(false);
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
