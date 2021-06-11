import { useState, useEffect } from "react";
import { Menu, Row, Col, Avatar } from "antd";
import { UserOutlined, PoweroffOutlined } from "@ant-design/icons"; //iconos
import { Link } from "react-router-dom"; //link para redireccion
import { getMeApi } from "../../../api/user"; //obtengo mis datos como usuario
import useAuth from "../../../hooks/useAuth"; //hook de usuario autenticado
import useStore from "../../../hooks/useStore"; //hook de usuario autenticado

const MenuTop = () => {
  //captar la url
  const [user, setUser] = useState(undefined);

  const { store, logoutStore } = useStore();
  const { logout, auth } = useAuth();
  //obtengo mis datos
  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response || null);
    })();
  }, [auth, setUser, logout]);

  //muestra menu desde el almacen a ver
  return (
    <Row justify="end">
      {user !== undefined && (
        <MenuOptions logoutStore={logoutStore} user={user} store={store} />
      )}
    </Row>
  );
};

const MenuOptions = ({ logoutStore, user, store }) => {
  const { SubMenu } = Menu;
  return (
    <Col lg={24} xl={(24, { span: 5 })}>
      <Menu mode="horizontal">
        {store !== undefined && (
          <SubMenu
            key="SubMenu"
            icon={<Avatar size="small" icon={<UserOutlined />} />}
            title={` ${user.name} ${user.lastname} - ${store.nombre} `}
          >
            <Menu.Item key="setting:4" icon={<UserOutlined />}>
              <Link to="/pos/mi-cuenta"> Mi Cuenta</Link>
            </Menu.Item>
            <Menu.Item
              key="setting:3"
              icon={<PoweroffOutlined />}
              onClick={logoutStore}
            >
              salir del almacen
            </Menu.Item>
          </SubMenu>
        )}
      </Menu>
    </Col>
  );
};

export default MenuTop;
