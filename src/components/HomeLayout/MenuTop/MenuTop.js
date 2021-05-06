import React, { useState } from "react";
import Modal from "../../../components/Modal";
import Auth from "../../../pages/Home/Auth";

import { Menu, Button } from "antd";
import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

const MenuTop = () => {
  const { subMenu } = Menu;
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("Iniciar Sesión");

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <Menu mode="horizontal" theme="dark" className="menu-top-web">
      <Menu.Item key={"/"}>
        <Link to={"/"}>Inicio </Link>
      </Menu.Item>
      <Menu.Item key={"/sobre-nosotros"}>
        <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
      </Menu.Item>
      <Menu.Item key={"/contacto"}>
        <Link to={"/contacto"}>Contacto </Link>
      </Menu.Item>
      <SubMenu title="empieza">
        <Menu.Item onClick={onShowModal}>Login </Menu.Item>
        <Menu.Item>Login vendedores </Menu.Item>
        <Menu.Item>Suscribete </Menu.Item>
      </SubMenu>
      <Modal show={showModal} setShow={setShowModal} title={titleModal}>
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
      </Modal>
    </Menu>
  );
};

export default MenuTop;
