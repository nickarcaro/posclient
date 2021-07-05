import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { Layout, Row, Col, Button } from 'antd';
import { getCategories } from "../../../api/categories";
import ListCategories from "../../../components/AdminLayout/Categories/ListCategories";
import CategoriesDetails from "../../../components/AdminLayout/Categories/CategoriesDetail";
import React, { useState, useEffect } from "react";
import { PlusSquareTwoTone } from "@ant-design/icons"

/**
 * 
 * Pagina de categorias
 * 
 */

const Categories = ({ match }) => {
  const { Content } = Layout;
  const history = useHistory();
  const { namestore } = match.params;
  const [categories, setCategories] = useState();
  const { logout, store } = useAuth();
  const [selectedCategories, setSelectedCategories] = useState(undefined)

  useEffect(() => {
    (async () => {
      const response = await getCategories(store.id, logout);
      setCategories(response || []);
    })();
  }, [setCategories, store.id, logout]);

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
          <Button type="primary" size="large" onClick={() => history.push(`/pos/${store.slug}/categorias/nueva-categoria`)} icon={<PlusSquareTwoTone />}>Nueva  Categoria { }</Button>

          </div>
          <br />
          <Row gutter={[16, 16]}>
            <Col span={12}> <ListCategories categories={categories} select={setSelectedCategories}/> </Col>
            <Col span={10}> <CategoriesDetails categories={selectedCategories}/> </Col>
           
          </Row>
        </Content>
      </Layout>
    </Content>
  );
};

export default Categories;
