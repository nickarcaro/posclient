//componentes para home
import Banner from "../../../components/HomeLayout/MenuTop/Banner";
import HowToWork from "../../../components/HomeLayout/Content/HowToWork";
import Clients from "../../../components/HomeLayout/Content/Clients";
import Plans from "../../../components/HomeLayout/Content/Plans";
//pagina de home
import { Layout } from "antd";
const Home = () => {
  const { Content } = Layout;
  return (
    <>
      <Banner />
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <HowToWork />
        <Plans />
        <Clients />
      </Content>
    </>
  );
};

export default Home;
