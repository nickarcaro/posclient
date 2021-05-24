import React, { useState, useEffect } from "react";
import Modal from "../../../components/Modal";
import Auth from "../../../pages/Home/Auth";
import { Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";
const MenuTop = () => {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("Iniciar Sesión");
  const [user, setUser] = useState(undefined);
  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  const { logout, auth } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response || null);
    })();
  }, [auth, logout, setUser]);

  return (
    <div>
      {user !== undefined && (
        <MenuOptions onShowModal={onShowModal} user={user} logout={logout} />
      )}

      <Modal show={showModal} setShow={setShowModal} title={titleModal}>
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
      </Modal>
    </div>
  );
};

export default MenuTop;

const MenuOptions = ({ onShowModal, user, logout }) => {
  const { SubMenu } = Menu;
  return (
    <>
      {user ? (
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
          <SubMenu
            key="SubMenu"
            icon={<Avatar size="small" icon={<UserOutlined />} />}
            title={` ${user.name}`}
          >
            <Menu.Item key="setting:1">
              <Link to="/pos/mi-cuenta"> Mi Cuenta</Link>
            </Menu.Item>
            <Menu.Item key="setting:2" onClick={logout}>
              Salir
            </Menu.Item>
          </SubMenu>
        </Menu>
      ) : (
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
          <SubMenu key="SubMenu" title="Empieza">
            <Menu.Item key="setting:1" onClick={onShowModal}>
              Login
            </Menu.Item>
            <Menu.Item key="setting:2">Login vendedores </Menu.Item>
            <Menu.Item key={"/suscribete"}>
              <Link to={"/suscribete"}>Suscribete</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      )}
    </>
  );
};
