import React from "react";
import { Modal as ModalAntd } from "antd";

//modal reutilizable
export default function Modal({ show, setShow, title, children, ...other }) {
  const onClose = () => setShow(false);
  return (
    <ModalAntd
      title={title}
      centered
      visible={show}
      onCancel={onClose}
      footer={false}
      {...other}
    >
      {children}
    </ModalAntd>
  );
}
