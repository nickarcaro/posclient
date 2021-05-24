import React, { useState, useEffect } from "react";
import { Menu, Row, Col, Avatar, Button } from "antd";
import {
  ShopOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons"; //iconos
import { Link } from "react-router-dom"; //link para ir
import { getMeApi } from "../../../api/user";
import useAuth from "../../../hooks/useAuth";

const MenuTop = () => {
  const { SubMenu } = Menu;
  const [user, setUser] = useState(undefined);
  const { logout, auth } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);
  //muestra menu desde el almacen a ver
  return (
    <Row justify="end">
      <Col lg={24} xl={(24, { span: 5 })}>
        {user !== undefined && (
          <Menu mode="horizontal">
            <SubMenu
              key="SubMenu"
              icon={<Avatar size="small" icon={<UserOutlined />} />}
              title={` ${user.name} ${user.lastname} `}
            >
              <Menu.Item key="setting:1" icon={<UserOutlined />}>
                <Link to="/pos/mi-cuenta"> Mi Cuenta</Link>
              </Menu.Item>
              <Menu.Item key="setting:2" icon={<ShopOutlined />}>
                <Link to="/pos"> Mis Almacenes</Link>
              </Menu.Item>
              <Menu.Item
                key="setting:3"
                icon={<PoweroffOutlined />}
                onClick={logout}
              >
                Cerrar Sesión
              </Menu.Item>
            </SubMenu>
          </Menu>
        )}
      </Col>
    </Row>
  );
};

export default MenuTop;
