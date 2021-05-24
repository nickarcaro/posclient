import React, { useState } from "react";
import { Form, Button, Input, notification } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateEmailApi } from "../../../api/user";
const ChangeEmailForm = ({ user, logout, setReloadUser }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateEmailApi(user.id, formData.email, logout);
      if (!response || response?.statusCode === 400) {
        notification["error"]({
          message: response,
        });
      } else {
        setReloadUser(true);
        notification["success"]({
          message: "Correo modificado",
        });
        formik.handleReset();
      }
      setLoading(false);
    },
  });

  return (
    <div className="change-email-form">
      <h4>
        Cambiar Correo electrónico <span>(Correo actual: {user.email})</span>
      </h4>

      <Form onFinish={formik.handleSubmit}>
        <Form.Item>
          <Input
            name="email"
            placeholder="Nuevo Correo"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            name="repeatEmail"
            placeholder="Confirmar Correo"
            onChange={formik.handleChange}
            value={formik.values.repeatEmail}
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
    email: "",
    repeatEmail: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref("repeatEmail")], true),
    repeatEmail: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref("email")], true),
  };
}

export default ChangeEmailForm;
