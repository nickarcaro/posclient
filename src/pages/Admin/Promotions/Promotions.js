import React, {useEffect, useState} from "react"
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { Layout, Row, Col, Button, List, Divider, Input, DatePicker, Space, InputNumber } from "antd";
import {getPromotions} from "../../../api/promotions"
import ListPromotions from "../../../components/AdminLayout/Promotions/ListPromotions"
import PromotionDetails from "../../../components/AdminLayout/Promotions/PromotionDetails"
import Modal from '../../../components/Modal'
import { PlusSquareTwoTone } from "@ant-design/icons"
import { getProducts } from "../../../api/products"
import AddPromotion from '../../../components/AdminLayout/Promotions/AddPromotion'


const Promotions = ({ match }) => {
  const { Content } = Layout;
  const history = useHistory();
  const { namestore } = match.params;
  const { store, logout } = useAuth();
  const [promotions, setPromotions] = useState([])
  const [selectedPromotion, setSelectedPromotion] = useState(undefined)

  const [showModal, setShowModal] = useState(false);
  const [ products, setProducts ] = useState([])

  console.log("input object: ", promotions)

  // const addProductPromotion = (product) =>{
  //   if (product === undefined) return
  //   const prodPromList = promotion.productos_promocion
  //   let inList = false
  //   console.log("prodprom: ", prodPromList)
  //   console.log("product: ", product)
  //   for (const prodProm in prodPromList) {
  //     console.log("iteracion: ", prodProm)
  //     if (prodProm.producto.id === product.id){
  //       inList = true
  //       prodProm.cantidad += 1
  //     }
  //   }
  //   if (!inList){
  //     prodPromList.push({
  //       producto:product,
  //       cantidad: 1
  //     })
  //   }
  //   setPromotion({...promotion, productos_promocion: prodPromList})
  // }


  useEffect(() => {
    const fetchPromotions = async () => {
      const response = await getPromotions(store.id, logout)
      console.log("valor response: ", response)
      setPromotions(response)
    }
    fetchPromotions()
  },[store, logout])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts(store.id, logout)
      console.log("valor response: ", response)
      setProducts(response)
    }
    fetchProducts()
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
            <Button type="primary" size="large" onClick={() => history.push(`/pos/${store.slug}/promociones/nueva-promocion`)} icon={<PlusSquareTwoTone />}>Nueva Promocion { }</Button>
            
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
