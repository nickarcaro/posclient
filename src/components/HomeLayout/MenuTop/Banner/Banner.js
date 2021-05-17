import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import { BannerInfo } from "./data";
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
          {BannerInfo.title1}
        </TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
        >
          {BannerInfo.title2}
        </TweenOne>
      </Element>
    </BannerAnim>
  );
};

export default Banner;
