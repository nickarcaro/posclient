import React from 'react'
import {List} from 'antd'

/**
 * Componente de lista de categoria
 
 */

const ListCategories = ({categories, select}) => {
  return (
    <>
      <List
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={categories}
        renderItem={categorie => (
          <List.Item onClick={() => {
            select(categorie)
          }}>
            <List.Item.Meta
              title= {categorie.nombre}
             
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default ListCategories