import Banner from "../../../components/HomeLayout/MenuTop/Banner";
import HowToWork from "../../../components/HomeLayout/Content/HowToWork";
import Content1 from "../../../components/HomeLayout/Content/Content1";
import Clients from "../../../components/HomeLayout/Content/Clients";
import Plans from "../../../components/HomeLayout/Content/Plans";
const Home = () => {
  return (
    <>
      <Banner />
      <Content1 />
      <HowToWork />
      <Plans />
      <Clients />
    </>
  );
};

export default Home;
