import React, {useState}from 'react'
import Modal from 'react-modal'
import { Layout, Row, Col, Button, List, Divider, Input, DatePicker, Space, InputNumber } from "antd";

const AddPromotion = ({products, showModal, setShowModal, store}) => {
  const [promotion, setPromotion] = useState(
    {
      almacen: store.id,
      nombre: "",
      precio: undefined,
      productos_promocion: []
    }
  )
  if (promotion===undefined) return <div></div>
  return (
    <>
        <Modal isOpen={showModal}> 
          <Space direction='vertical'>
            <Button onClick={()=>setShowModal(false)} >Cerrar </Button>
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
                  setPromotion({...promotion, precio: value})
                }} style={{width: 600}} ></InputNumber>
              </Col>
            </Row>
            <Row>
              <Col span={4}><h4>Inicio Vigencia: </h4></Col>
              <Col span={20}><DatePicker/></Col>
            </Row>
            <Row>
              <Col span={4}><h4>Fin Vigencia: </h4></Col>
              <Col span={20}><DatePicker/></Col>
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
                  <List.Item onClick={()=>{console.log(product)}}>
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
            </Col>
          </Row>
        </Modal>
      
    </>
  )
}

export default AddPromotion
