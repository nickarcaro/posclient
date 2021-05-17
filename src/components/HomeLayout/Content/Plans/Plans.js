import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import { page1 } from "./data";

const Plans = () => {
  const children = page1.map((card, i) => (
    <Col className="card-wrapper" key={i.toString()} md={8} xs={24}>
      <div className="card">
        <h3>{card.title}</h3>
        <img src={card.img} alt="" className="card-img-top" />
        <div className="card-body">
          <span className="description text-secondary">{card.description}</span>
        </div>
      </div>
    </Col>
  ));

  return (
    <section className="page-wrapper page1">
      <QueueAnim
        component={Row}
        type="bottom"
        className="page row text-center"
        delay={500}
      >
        {children}
      </QueueAnim>
    </section>
  );
};

export default Plans;
