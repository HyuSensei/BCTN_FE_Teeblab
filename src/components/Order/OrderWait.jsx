import { Divider } from "antd";
import React from "react";
import { formatPrice } from "../../helpers/formatPrice";

const data = [
  {
    detail: [
      {
        name: "Áo Thun Teelab Local Brand Unisex Jersey No.88 Tshirt TS274",
        image:
          "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-7838-1.jpg?v=1721293980853",
        quantity: 2,
        price: 185000,
        color: "Đen",
        size: "M",
      },
      {
        name: "Áo Thun Teelab Local Brand Unisex Rabbit on Animal Planet Tshirt TS258",
        image:
          "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-2299-1.jpg?v=1721294051250",
        quantity: 2,
        price: 185000,
        color: "Đỏ",
        size: "L",
      },
    ],
    total: 185000,
  },
  {
    detail: [
      {
        name: "Áo Thun Teelab Local Brand Unisex Rabbit on Animal Planet Tshirt TS258",
        image:
          "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1223-1.jpg?v=1721294431393",
        quantity: 2,
        price: 185000,
        color: "Trắng",
        size: "XL",
      },
    ],
    total: 185000,
  },
  {
    detail: [
      {
        name: "Áo Thun Teelab Local Brand Unisex Jersey No.88 Tshirt TS274",
        image:
          "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-7838-1.jpg?v=1721293980853",
        quantity: 2,
        price: 185000,
        color: "Trắng",
        size: "XL",
      },
    ],
    total: 185000,
  },
];

const OrderWait = () => {
  return (
    <>
      {data?.map((order, idx) => (
        <div
          key={"order-" + idx}
          className="pb-6 text-xs md:text-base xl:text-base 2xl:text-base"
        >
          {order?.detail?.map((item, index) => (
            <div key={"item-order" + index}>
              <div className="py-2 flex gap-2 items-center">
                <img
                  className="w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 2xl:w-32 2xl:h-32"
                  src={item.image}
                  alt="image-product"
                />
                <div>
                  <div className="pb-1">{item.name}</div>
                  <div className="font-bold">
                    <div>
                      {item.size} / {item.color}
                    </div>
                    <div>x {item.quantity}</div>
                    <div className="text-rose-800">
                      {formatPrice(item.price)}đ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-yellow-400">Đơn hàng đang chờ xác nhận</div>
          <div className="py-2 flex justify-between items-center">
            <div className="font-bold">
              Tổng tiền:{" "}
              <span className="text-rose-800">{formatPrice(order.total)}đ</span>
            </div>
            <div className="py-2 px-3 bg-black text-slate-50 text-center rounded-md font-medium">
              Hủy đơn hàng
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </>
  );
};

export default OrderWait;
