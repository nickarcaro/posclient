import React, {useState, useEffect}from 'react'
import { useHistory } from "react-router-dom";
import useAuth from '../../../hooks/useAuth'
import { Layout, Row, Col, Button, List, Divider, Input, DatePicker, Space, InputNumber } from "antd";
import {getProducts} from '../../../api/products'
import {addPromotion} from '../../../api/promotions'
import {addCategory} from '../../../api/categories'
import { post } from 'request';

/**
 * 
 * Pagina para agregar categorias
 * 
 */

const AddCategories = () => {
  const {Content} = Layout
  const [ products, setProducts ] = useState([])
  const history = useHistory();
  const { store, logout } = useAuth()
  const [category, setCategory] = useState({
    almacen: store.id,
    nombre: "",
    productos: []
  })

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts(store.id, logout)
      console.log("valor response: ", response)
      setProducts(response)
    }
    fetchProducts()
  },[store, logout])

  const pushProduct = (product) => {
    const catProducts = category.productos
    catProducts.push(product)
    setCategory({...category, productos: catProducts})
  }

  const postCategory = async () => {
    if (category.nombre === "" || category.productos.length === 0 ) {
      console.log("Falta ingresar datos")
      return
    }
    console.log("categoria: .. ", category)
    const response = await addCategory(category, logout)
    console.log("response: ", response)
    history.push(`/pos/${store.slug}/categorias`)
  }

  return (
    <>
    <Content>
      <Layout
        className="site-layout-background"
        style={{ padding: "24px 0", background: "#fff", marginTop: 20 }}
      >
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Button onClick={()=>history.push(`/pos/${store.slug}/categorias`)}>Volver</Button>
          <h3>Nombre</h3>
          <Input placeholder="nombre" onChange={(e) => {
            setCategory({...category, nombre: e.target.value})
          }} style={{width: 600}} ></Input>
          <Row gutter={[32,16]}>
            <Col span={12}>
              <Divider>Seleccione Productos de Categoria</Divider>
              <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={products}
                renderItem={product => (
                  <List.Item onClick={()=>{pushProduct(product)}}>
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
              <Divider>Productos de Categoria</Divider>
              <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={category.productos}
                renderItem={product => (
                  <List.Item>
                    <List.Item.Meta
                      title= {product.nombre}
                    />
                  </List.Item>
                )}
              />
              <Button onClick={()=>{setCategory({...category, productos: []})}} >Limpiar</Button>
              <Button onClick={()=>{postCategory()}} >Crear Categoria</Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Content>
    </>
  )
}

export default AddCategories
