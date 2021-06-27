import React from 'react'
import {List, Divider, Typography} from 'antd'

const { Title } = Typography;

const PromotionDetails = ({promotion}) => {
  return promotion === undefined ? (
    <div>Seleccione una promocion</div>
  ) : (
    <>
      <Divider orientation="left">{promotion.nombre}</Divider>
      <List
        header={<h1>Productos</h1>}
        // footer={
        //   <List.Item>
        //     <List.Item.Meta
        //       title = {<div>Total: </div>}
        //     />
        //     <div>${promotion.precio_promocion}</div>  
        //   </List.Item>
        // }
        // bordered
        dataSource={promotion.productos_promocion}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title = {item.producto.nombre}
              description = {
                <div>
                  {item.cantidad} unidades a ${item.producto.precio_actual}
                  /unidad{" "}
                </div>
              }
            />
            <div>${item.producto.precio_actual*item.cantidad}</div>
          </List.Item>
        )}
      />
      <Divider orientation="center">Valor Promocion</Divider>
      <Title level={5} style={{textAlign:'center'}}> ${promotion.precio_promocion} </Title>
    </>
  )
}

export default PromotionDetails
