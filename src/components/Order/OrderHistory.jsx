import { Tabs } from "antd";
import React from "react";
import OrderWait from "./OrderWait";
import OrderShip from "./OrderShip";
import OrderComplete from "./OrderComplete";
import OrderCancel from "./OrderCancel";

const OrderHistory = () => {
  const items = [
    {
      key: "1",
      label: (
        <div className="font-bold text-sm md:text-base xl:text-base 2xl:text-base">
          Đang chờ
        </div>
      ),
      children: <OrderWait />,
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-sm md:text-base xl:text-base 2xl:text-base">
          Đang giao
        </div>
      ),
      children: <OrderShip />,
    },
    {
      key: "3",
      label: (
        <div className="font-bold text-sm md:text-base xl:text-base 2xl:text-base">
          Hoàn thành
        </div>
      ),
      children: <OrderComplete />,
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-sm md:text-base xl:text-base 2xl:text-base">
          Đã hủy
        </div>
      ),
      children: <OrderCancel />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default OrderHistory;
