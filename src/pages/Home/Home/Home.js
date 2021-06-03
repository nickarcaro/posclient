import { Layout } from "antd";
//componentes para home
import Banner from "../../../components/HomeLayout/MenuTop/Banner";
import HowToWork from "../../../components/HomeLayout/Content/HowToWork";
import Clients from "../../../components/HomeLayout/Content/Clients";
import Plans from "../../../components/HomeLayout/Content/Plans";

//pagina de home

const Home = () => {
  const { Content } = Layout;
  return (
    <main>
      <Banner />
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <HowToWork />
        <Plans />
        <Clients />
      </Content>
    </main>
  );
};

export default Home;
