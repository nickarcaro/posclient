import React, {useState, useEffect}from 'react'
import { useHistory } from "react-router-dom";
import useAuth from '../../../hooks/useAuth'
import { Layout, Row, Col, Button, List, Divider, Input, DatePicker, Space, InputNumber } from "antd";
import {getProducts} from '../../../api/products'
import {addPromotion} from '../../../api/promotions'


const AddPromotion = () => {

  const {Content} = Layout
  const [ products, setProducts ] = useState([])
  const history = useHistory();
  const { store, logout } = useAuth();
  const [promotion, setPromotion] = useState(
    {
      almacen: store.id,
      nombre: "",
      inicio_vigencia: undefined,
      fin_vigencia: undefined,
      precio_promocion: undefined,
      productos_promocion: []
    }
  )
  console.log('promotion: ', promotion)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts(store.id, logout)
      console.log("valor response: ", response)
      setProducts(response)
    }
    fetchProducts()
  },[store, logout])

  const addProductPromotion = (product) =>{
    if (product === undefined || promotion === undefined){
      console.log('producto: ', product)
      console.log('promocion: ', promotion)
      return
    } 
    const prodPromList = promotion.productos_promocion
    let inList = false
    console.log("prodprom: ", prodPromList)
    console.log("product: ", product)
    for (const prodProm of prodPromList) {
      console.log("iteracion prodProm: ", prodProm)
      console.log("iteracion product: ", product)
      if (prodProm.producto.id === product.id){
        inList = true
        prodProm.cantidad += 1
      }
    }
    if (!inList){
      prodPromList.push({
        producto:product,
        cantidad: 1
      })
    }
    setPromotion({...promotion, productos_promocion: prodPromList})
  }
  
  const postPromotion = async () => {
    if (
      !promotion.inicio_vigencia || !promotion.fin_vigencia || !promotion.precio_promocion ||
      promotion.nombre === "" || promotion.productos_promocion.length === 0
    ) {
      console.log("Falta ingresar datos")
      return
    }
    console.log("promocion: .. ", promotion)
    const response = await addPromotion(promotion, logout)
    console.log("response: ", response)
    history.push(`/pos/${store.slug}/promociones`)
  }


  return (
    <div>
      <Content>
      <Layout
        className="site-layout-background"
        style={{ padding: "24px 0", background: "#fff", marginTop: 20 }}
      >
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Space direction='vertical'>
            <Button onClick={()=>history.push(`/pos/${store.slug}/promociones`)}>Volver</Button>
            <h1>Nueva Promocion</h1>
            <Row>
              <Col span={4}><h4>Nombre: </h4></Col>
              <Col span={20}>
                <Input placeholder="nombre" onChange={(e) => {
                  setPromotion({...promotion, nombre: e.target.value})
                }} style={{width: 600}} ></Input>
              </Col>
            </Row>
            <Row>
              <Col span={4}><h4>Precio: </h4></Col>
              <Col span={20}>
                <InputNumber placeholder='precio'  onChange={(value)=>{
                  setPromotion({...promotion, precio_promocion: value})
                }} style={{width: 600}} ></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span={4}><h4>Inicio Vigencia: </h4></Col>
              <Col span={20}><DatePicker onChange={(date, dateString)=>{setPromotion({...promotion, inicio_vigencia: date.toJSON()})}}/></Col>
            </Row>
            <Row>
              <Col span={4}><h4>Fin Vigencia: </h4></Col>
              <Col span={20}><DatePicker onChange={(date, dateString)=>{setPromotion({...promotion, fin_vigencia: date.toJSON()})}}/></Col>
            </Row>
          </Space>

          <Row gutter={[32,16]}>
            <Col span={12}>
              <Divider>Seleccione Productos de Promocion</Divider>
              <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={products}
                renderItem={product => (
                  <List.Item onClick={()=>{addProductPromotion(product, promotion, setPromotion)}}>
                    <List.Item.Meta
                      title={product.nombre}
                      description={
                        <div> ${product.precio_actual} </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Col>
            <Col span={12}>
              <Divider>Productos de promocion</Divider>
              <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={promotion.productos_promocion}
                renderItem={prodProm => (
                  <List.Item>
                    <List.Item.Meta
                      title= {
                        ` ${prodProm.cantidad} ${prodProm.producto.nombre}`
                      }
                  
                    />
                  </List.Item>
                )}
              />
              <Button onClick={()=>{setPromotion({...promotion, productos_promocion: []})}} >Limpiar</Button>
              <Button onClick={()=>{postPromotion()}} >Crear Promocion</Button>
            </Col>
          </Row> 
        </Content>
      </Layout>
    </Content>
      
    </div>
  )
}

export default AddPromotion
