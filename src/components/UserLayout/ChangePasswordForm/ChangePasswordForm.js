import React, { useState } from "react";
import { Form, Button, Input, notification } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updatePasswordApi } from "../../../api/user";

const ChangePasswordForm = ({ user, logout }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updatePasswordApi(
        user.id,
        formData.password,
        logout
      );
      if (!response) {
        notification["error"]({
          message: response,
        });
      } else {
        logout();
      }
      setLoading(false);
    },
  });

  return (
    <div className="change-password-form">
      <h4>Cambiar contraseña</h4>
      <Form onFinish={formik.handleSubmit}>
        <Form.Item widths="equal">
          <Input
            name="password"
            type="password"
            placeholder="Tu nueva contraseña"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Input
            name="repeatPassword"
            type="password"
            placeholder="Confirma tu nueva contraseña"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
          />
        </Form.Item>
        <Button htmlType="submit" loading={loading}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
};

function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

function validationSchema() {
  return {
    password: Yup.string()
      .required(true)
      .oneOf([Yup.ref("repeatPassword")], true),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], true),
  };
}
export default ChangePasswordForm;
