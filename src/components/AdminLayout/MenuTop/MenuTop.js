import { Button, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

const MenuTop = ({ menuCollapsed, setMenuCollapsed }) => {
  return (
    <Button
      className="trigger"
      type="link"
      onClick={() => setMenuCollapsed(!menuCollapsed)}
    >
      {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button>
  );
};

export default MenuTop;
