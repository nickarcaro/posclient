import { Tabs } from "antd";
import { direction } from "./data";

const Information = () => {
  const { TabPane } = Tabs;
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Contacto" key="1">
          <ul>
            <li>
              <span> Dirección: </span>
              {direction.direccion}
            </li>
            <li>
              <span> Horario: </span>
              {direction.horario}
            </li>
            <li>
              <span>Telefono:</span> {direction.telefono}
            </li>
          </ul>
        </TabPane>
        <TabPane tab="Mapa" key="2">
          <p>mapa del lugar</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Information;
