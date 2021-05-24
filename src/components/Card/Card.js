import React from "react";
import { Card as AntdCard } from "antd";
import { StarOutlined } from "@ant-design/icons";
const Card = () => {
  const { Meta } = AntdCard;
  return (
    <AntdCard
      hoverable
      style={{ width: 240 }}
      actions={[<StarOutlined key="setting" />]}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </AntdCard>
  );
};

export default Card;
