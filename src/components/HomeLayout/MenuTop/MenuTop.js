import React, { useState, useEffect } from "react";
import Modal from "../../../components/Modal";
import Auth from "../../../pages/Home/Auth";
import { Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";
const MenuTop = () => {
  const { SubMenu } = Menu;
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("Iniciar Sesión");
  const [user, setUser] = useState(undefined);
  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  const { logout, auth } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

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
      {user !== undefined && auth ? (
        <SubMenu
          key="SubMenu"
          icon={<Avatar size="small" icon={<UserOutlined />} />}
          title={` ${user.name}`}
        >
          <Menu.Item key="setting:1">
            <Link to="/mi-cuenta"> Mi Cuenta</Link>
          </Menu.Item>
          <Menu.Item key="setting:2" onClick={logout}>
            Salir
          </Menu.Item>
        </SubMenu>
      ) : (
        <SubMenu key="SubMenu" title="Empieza">
          <Menu.Item key="setting:1" onClick={onShowModal}>
            Login
          </Menu.Item>
          <Menu.Item key="setting:2">Login vendedores </Menu.Item>
          <Menu.Item key={"/suscribete"}>
            <Link to={"/suscribete"}>Suscribete</Link>
          </Menu.Item>
        </SubMenu>
      )}

      <Modal show={showModal} setShow={setShowModal} title={titleModal}>
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
      </Modal>
    </Menu>
  );
};

export default MenuTop;
