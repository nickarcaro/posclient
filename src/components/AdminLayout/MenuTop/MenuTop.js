import React, { useState, useEffect } from "react";
import { Menu, Row, Col, Avatar, Button } from "antd";
import {
  ShopOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { getMeApi } from "../../../api/user";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
const MenuTop = () => {
  const [user, setUser] = useState(undefined);
  const { SubMenu } = Menu;
  const { logout, auth } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

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
                <Link to="/mi-cuenta"> Mi Cuenta</Link>
              </Menu.Item>
              <Menu.Item key="setting:1" icon={<ShopOutlined />}>
                Mis Almacenes
              </Menu.Item>
              <Menu.Item
                key="setting:2"
                icon={<PoweroffOutlined />}
                onClick={logout}
              >
                Salir
              </Menu.Item>
            </SubMenu>
          </Menu>
        )}
      </Col>
    </Row>
  );
};

export default MenuTop;
// <Button type="primary" icon={<PoweroffOutlined />} onClick={logout} />

/*
{user !== undefined && (
          <Menu mode="horizontal">
            <SubMenu
              key="SubMenu"
              icon={<Avatar size="small" icon={<UserOutlined />} />}
              title={` ${user.name} ${user.lastname} `}
            >
              <Menu.Item key="setting:1" icon={<UserOutlined />}>
                <Link to="/mi-cuenta"> Mi Cuenta</Link>
              </Menu.Item>
              <Menu.Item key="setting:1" icon={<ShopOutlined />}>
                Mis Almacenes
              </Menu.Item>
              <Menu.Item
                key="setting:2"
                icon={<PoweroffOutlined />}
                onClick={logout}
              >
                Salir
              </Menu.Item>
            </SubMenu>
          </Menu>
        )} */
