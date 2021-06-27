import React from 'react'
import {List} from 'antd'

const ListPromotions = ({promotions, select}) => {
  return (
    <>
      <List
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={promotions}
        renderItem={promotion => (
          <List.Item onClick={() => {
            select(promotion)
          }}>
            <List.Item.Meta
              title= {promotion.nombre}
              description={
                <div> ${promotion.precio_promocion} </div>
              }
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default ListPromotions
