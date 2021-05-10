import { Tabs } from "antd";

const Information = () => {
  const { TabPane } = Tabs;
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Contacto" key="1">
          <ul>
            <li>Direccion:</li>
            <li>Horario:</li>
            <li>Telefono:</li>
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
