import { Form, Input, Button, Select } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { data } from "./data";
const ContactForm = () => {
  const { Option } = Select;

  const selects = data.map((index, i) => (
    <Option value={index.tipo}> {index.tipo}</Option>
  ));

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
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Correo Electrónico"
        />
      </Form.Item>
      <Form.Item>
        <Select style={{ width: 120 }} placeholder="Consulta">
          {selects}
        </Select>
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
