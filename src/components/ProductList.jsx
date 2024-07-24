import React from "react";
import { List } from "antd";
import { formatPrice } from "../helpers/formatPrice";

const data = [
  {
    name: "Áo Thun Teelab Local Brand Unisex Jersey No.88 Tshirt TS274",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-7838-1.jpg?v=1721293980853",
    description: "",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Slow Sunday Tshirt TS270",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-2299-1.jpg?v=1721294051250",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Rabbit on Animal Planet Tshirt TS258",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1223-1.jpg?v=1721294431393",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Rabbit on Animal Planet Tshirt TS258",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1102-1.jpg?v=1717755860757",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Jersey No.88 Tshirt TS274",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-7838-1.jpg?v=1721293980853",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Slow Sunday Tshirt TS270",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-2299-1.jpg?v=1721294051250",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Rabbit on Animal Planet Tshirt TS258",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1223-1.jpg?v=1721294431393",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Rabbit on Animal Planet Tshirt TS258",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1102-1.jpg?v=1717755860757",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Jersey No.88 Tshirt TS274",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-7838-1.jpg?v=1721293980853",
    description: "",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Slow Sunday Tshirt TS270",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-2299-1.jpg?v=1721294051250",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Rabbit on Animal Planet Tshirt TS258",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1223-1.jpg?v=1721294431393",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Rabbit on Animal Planet Tshirt TS258",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1102-1.jpg?v=1717755860757",
    price: 185000,
  },
];

const ProductList = ({ products, title = "ÁO THUN" }) => {
  return (
    <div className="md:px-8 xl:px-8 2xl:px-8 py-8">
      <div className="px-4 text-2xl font-bold">{title}</div>
      <div className="py-8">
        <List
          grid={{
            gutter: 16,
            xs: 2,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <div className="text-xs md:text-sm xl:text-base 2xl:text-base w-full px-4 cursor-pointer">
                <div className="py-2">
                  <img className="rounded-md" src={item.image} alt="" />
                  <span className="absolute top-2 left-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    50% OFF
                  </span>
                </div>
                <div className="font-medium truncate-2-lines">
                  {item.name}
                </div>
                <div className="py-2 font-bold flex gap-4 items-center justify-center">
                  <div className="text-rose-800">
                    {formatPrice(item.price)} đ
                  </div>
                  <div className="text-slate-600 line-through">
                    {formatPrice(item.price)} đ
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ProductList;
