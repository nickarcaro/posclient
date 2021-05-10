import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

const Content1 = () => {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title">Pos Almacenes</h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <p className="main-info" key="1">
            Pos almacenes proyecto
          </p>
          <p className="main-info" key="2">
            Pos almacenes proyecto
          </p>
        </QueueAnim>
      </QueueAnim>
    </OverPack>
  );
};

export default Content1;
