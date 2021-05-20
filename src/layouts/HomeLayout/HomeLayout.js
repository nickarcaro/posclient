import React, { useState, useEffect } from "react";
import { Layout, Row, Col } from "antd"; //libreria de estilo

//componentes
import MenuTop from "../../components/HomeLayout/MenuTop";
import MainFooter from "../../components/HomeLayout/Footer/MainFooter";

const HomeLayout = ({ children }) => {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Row>
          <Col xs={9} sm={9} md={9} lg={9} xl={9}>
            <img alt="pos almacenes" />
          </Col>
          <Col xs={7} sm={6} md={6} lg={6} xl={6} />
          <Col xs={8} sm={9} md={9} lg={9} xl={9}>
            <MenuTop />
          </Col>
        </Row>
      </Header>
      <Content>{children}</Content>
      <MainFooter />
    </Layout>
  );
};

export default HomeLayout;

/*

<Row>
          <Col lg={1} />
          <Col lg={11}>
            <div className="logo-home" />
          </Col>
          <Col lg={2} />
          <Col lg={10}>
            <MenuTop />
          </Col>
        </Row>

*/
