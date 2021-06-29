import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

const DescriptionUs = () => {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title">Sobre Nosotros</h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <p className="main-info" key="1">
            "Somos un equipo dedicado a la labor de brindar servicios a los
            almacenes y futuros emprendedores."
          </p>
        </QueueAnim>
      </QueueAnim>
    </OverPack>
  );
};

export default DescriptionUs;
