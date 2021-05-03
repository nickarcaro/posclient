import React, { useState } from "react";
import Modal from "../../../components/Modal";
import Auth from "../../../pages/Home/Auth";

import { Menu, Button } from "antd";
const MenuTop = () => {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("Iniciar Sesión");

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item>Inicio</Menu.Item>
      <Menu.Item>Sobre Nosotros</Menu.Item>
      <Menu.Item>Nuestros Clientes</Menu.Item>
      <Menu.Item disabled>
        <Button type="primary" onClick={onShowModal}>
          empieza
        </Button>
      </Menu.Item>
      <Modal show={showModal} setShow={setShowModal} title={titleModal}>
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
      </Modal>
    </Menu>
  );
};

export default MenuTop;
