import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";

const Banner = () => {
  const BgElement = Element.BgElement;

  return (
    <BannerAnim prefixCls="banner-user">
      <Element prefixCls="banner-user-elem">
        <BgElement
          key="bg"
          className="bg"
          style={{
            background: "#364D79",
          }}
        />
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        >
          Pos Almacenes
        </TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
        >
          Una nueva forma de Gestionar tu negocio
        </TweenOne>
      </Element>
    </BannerAnim>
  );
};

export default Banner;
