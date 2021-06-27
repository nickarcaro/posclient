import React, {useEffect, useState} from "react"
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import {getPromotions} from "../../../api/promotions"
import ListPromotions from "../../../components/AdminLayout/Promotions/ListPromotions"
import PromotionDetails from "../../../components/AdminLayout/Promotions/PromotionDetails"

const Promotions = ({ match }) => {
  const { Content } = Layout;
  const history = useHistory();
  const { namestore } = match.params;
  const { store, logout } = useAuth();
  const [promotions, setPromotions] = useState([])
  const [selectedPromotion, setSelectedPromotion] = useState(undefined)

  useEffect(() => {
    const fetchPromotions = async () => {
      const response = await getPromotions(store.id, logout)
      console.log("valor response: ", response)
      setPromotions(response)
    }
    fetchPromotions()
  },[store, logout])


  if (namestore !== store.slug || !store) {
    history.replace("/pos");
    return null;
  }


  return (
    <Content>
      <Layout
        className="site-layout-background"
        style={{ padding: "24px 0", background: "#fff", marginTop: 20 }}
      >
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <div>
            <button>Añadir promocion</button> <span />
            <button>buscar Promocion</button> <span />
          </div>
          <br />
          <Row gutter={[16, 16]}>
            <Col span={12}> <ListPromotions promotions={promotions} select={setSelectedPromotion}/> </Col>
            <Col span={10}> <PromotionDetails promotion={selectedPromotion}/> </Col>
          </Row>
        </Content>
      </Layout>
    </Content>
  );
};

export default Promotions;
