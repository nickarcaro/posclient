import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
const ContactForm = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item>
        <Input
          placeholder="nombre"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<QuestionCircleOutlined className="site-form-item-icon" />}
          placeholder="Consulta"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Correo Electrónico"
        />
      </Form.Item>
      <Form.Item>
        <Input.TextArea placeholder="Contacto" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Contactar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
