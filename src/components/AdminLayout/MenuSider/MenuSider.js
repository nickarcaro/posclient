import { Menu, Layout } from "antd";
import { Link, withRouter, useParams } from "react-router-dom";
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

const MenuSider = ({ menuCollapsed, setMenuCollapsed }) => {
  const { Sider } = Layout;
  //el nombre del almacen
  const { store } = useParams();
  //sider cambia el icono cuando se oprime

  return (
    <Sider
      trigger={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      collapsible
      collapsed={menuCollapsed}
      onCollapse={setMenuCollapsed}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[`${store}`]}>
        <Menu.Item key={`${store}`} icon={<DashboardOutlined />}>
          <Link to={`${store}`}> Indicadores</Link>
        </Menu.Item>
        <Menu.Item key={`/productos`} icon={<ContainerOutlined />}>
          <Link to={`/productos`}>Productos</Link>
        </Menu.Item>
        <Menu.Item key={`/vendedores`} icon={<TeamOutlined />}>
          <Link to={`/vendedores`}>Vendedores</Link>
        </Menu.Item>
        <Menu.Item key={`/ventas`} icon={<DollarOutlined />}>
          <Link to={`/ventas`}>Ventas</Link>
        </Menu.Item>
        <Menu.Item key={`/proveedores`} icon={<CarOutlined />}>
          <Link to={`/proveedores`}>Proveedores</Link>
        </Menu.Item>
        <Menu.Item key={`/jerarquias`} icon={<PartitionOutlined />}>
          <Link to={`/jerarquias`}>Jerarquias</Link>
        </Menu.Item>
        <Menu.Item key={`/categorias`} icon={<TagsOutlined />}>
          <Link to={`/categorias`}>Categorias</Link>
        </Menu.Item>
        <Menu.Item key={`/promociones`} icon={<PercentageOutlined />}>
          <Link to={`/promociones`}> Promociones</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(MenuSider);
