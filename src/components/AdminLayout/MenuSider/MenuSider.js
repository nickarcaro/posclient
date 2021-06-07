import { Menu, Layout } from "antd";
import { Link, withRouter } from "react-router-dom";
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
        defaultSelectedKeys={[`pos/${store.slug}`]}
      >
        <Menu.Item key={`pos/${store.slug}`} icon={<DashboardOutlined />}>
          <Link to={`/pos/${store.slug}`}>Indicadores</Link>
        </Menu.Item>
        <Menu.Item
          key={`pos/${store.slug}/productos`}
          icon={<ContainerOutlined />}
        >
          <Link to={`/pos/${store.slug}/productos`}>Productos</Link>
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/vendedores`}
          icon={<TeamOutlined />}
        >
          <Link to={`/pos/${store.slug}/vendedores`}>Vendedores</Link>
        </Menu.Item>
        <Menu.Item key={`/pos/${store.slug}/ventas`} icon={<DollarOutlined />}>
          <Link to={`/pos/${store.slug}/ventas`}>Ventas</Link>
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/proveedores`}
          icon={<CarOutlined />}
        >
          <Link to={`/pos/${store.slug}/proveedores`}>Proveedores</Link>
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/jerarquias`}
          icon={<PartitionOutlined />}
        >
          <Link to={`/pos/${store.slug}/jerarquias`}>Jerarquias</Link>
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/categorias`}
          icon={<TagsOutlined />}
        >
          <Link to={`/pos/${store.slug}/categorias`}>Categorias</Link>
        </Menu.Item>
        <Menu.Item
          key={`/pos/${store.slug}/promociones`}
          icon={<PercentageOutlined />}
        >
          <Link to={`/pos/${store.slug}/promociones`}> Promociones</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(MenuSider);
