import { Menu, Layout } from "antd";
import { Link, withRouter, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TeamOutlined,
  DollarOutlined,
  ContainerOutlined,
  CarOutlined,
  TagsOutlined,
  PercentageOutlined,
  PartitionOutlined,
} from "@ant-design/icons";
import useStore from "../../../hooks/useStore";
const MenuSider = ({ menuCollapsed, setMenuCollapsed }) => {
  const { store } = useStore();
  const { Sider } = Layout;
  const location = useLocation();

  //el nombre del almacen
  //sider cambia el icono cuando se oprime
  return (
    <Sider
      trigger={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      collapsible
      collapsed={menuCollapsed}
      onCollapse={setMenuCollapsed}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key={`/pos/${store.slug}`} icon={<DashboardOutlined />}>
          <Link to={`/pos/${store.slug}`}>Indicadores</Link>
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/productos`}
          icon={<ContainerOutlined />}
        >
          Productos
          <Link to={`/pos/${store.slug}/productos`} />
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/vendedores`}
          icon={<TeamOutlined />}
        >
          Vendedores
          <Link to={`/pos/${store.slug}/vendedores`} />
        </Menu.Item>
        <Menu.Item key={`/pos/${store.slug}/ventas`} icon={<DollarOutlined />}>
          Ventas
          <Link to={`/pos/${store.slug}/ventas`} />
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/proveedores`}
          icon={<CarOutlined />}
        >
          Proveedores
          <Link to={`/pos/${store.slug}/proveedores`} />
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/jerarquias`}
          icon={<PartitionOutlined />}
        >
          Jerarquias
          <Link to={`/pos/${store.slug}/jerarquias`} />{" "}
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/categorias`}
          icon={<TagsOutlined />}
        >
          Categorías
          <Link to={`/pos/${store.slug}/categorias`} />
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/promociones`}
          icon={<PercentageOutlined />}
        >
          Promociones
          <Link to={`/pos/${store.slug}/promociones`} />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(MenuSider);
