import { Row, Col } from "antd";

const MainFooter = () => {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Links</h2>
              <div>
                <p target="_blank ">link1</p>
              </div>
              <div>
                <p target="_blank ">link1</p>
              </div>
              <div>
                <p target="_blank ">link1</p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Contacto</h2>
              <div>
                <p target="_blank ">link1</p>
              </div>
              <div>
                <p target="_blank ">link1</p>
              </div>
              <div>
                <p target="_blank ">link1</p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Producto</h2>
              <div>
                <p target="_blank ">link1</p>
              </div>
              <div>
                <p target="_blank ">link1</p>
              </div>
              <div>
                <p target="_blank ">link1</p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>usuarios</h2>
              <div>
                <p target="_blank ">link1</p>
              </div>
              <div>
                <p target="_blank ">link1</p>
              </div>
              <div>
                <p target="_blank ">link1</p>
              </div>
              <div>
                <p target="_blank ">link1</p>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Nosotros</h2>
              <div>
                <p target="_blank">Pos almacenes</p>
                <span> - </span>
                <span>tics3</span>
              </div>
              <div>
                <p target="_blank">Egg</p>
                <span> - </span>
                <span>Node Web </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24} />
        <Col lg={18} sm={24}>
          <span style={{ marginRight: 12 }}>2021</span>
          <span style={{ marginRight: 12 }}>Copyright © udp</span>
        </Col>
      </Row>
    </footer>
  );
};

export default MainFooter;
