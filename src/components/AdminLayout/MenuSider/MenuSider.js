import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { Link, withRouter } from "react-router-dom";

const MenuSider = ({ menuCollapsed, location }) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <Sider trigger={null} collapsible collapsed={menuCollapsed}>
      <div className="logo-admin" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Productos">
          <Menu.Item key="1" icon={<UserOutlined />}>
            catalogo
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          stock
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          proveedores
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          Categorias
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          ventas
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          inventario
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          precios
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
          promociones
        </Menu.Item>
        <Menu.Item key="9" icon={<ShopOutlined />}>
          impuesto
        </Menu.Item>
        <Menu.Item key="10" icon={<ShopOutlined />}>
          precios
        </Menu.Item>
        <Menu.Item key="11" icon={<ShopOutlined />}>
          informes
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(MenuSider);
