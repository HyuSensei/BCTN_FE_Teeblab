import { Breadcrumb } from "antd";
import React, { useState } from "react";
import { Table } from "flowbite-react";
import { formatPrice } from "../helpers/formatPrice";
import { MinusOutlined, PlusOutlined, HomeOutlined } from "@ant-design/icons";
import CheckOutModal from "../components/Modal/CheckOutModal";

const carts = [
  {
    name: "Áo Thun Teelab Local Brand Unisex Jersey No.88 Tshirt TS274",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-7838-1.jpg?v=1721293980853",
    quantity: 2,
    size: "M",
    color: "Đen",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Slow Sunday Tshirt TS270",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-2299-1.jpg?v=1721294051250",
    quantity: 2,
    size: "M",
    color: "Đen",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Rabbit on Animal Planet Tshirt TS258",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1223-1.jpg?v=1721294431393",
    quantity: 2,
    size: "M",
    color: "Đen",
    price: 185000,
  },
  {
    name: "Áo Thun Teelab Local Brand Unisex Rabbit on Animal Planet Tshirt TS258",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1102-1.jpg?v=1717755860757",
    quantity: 2,
    size: "M",
    color: "Đen",
    price: 185000,
  },
];

const breadcrumbItems = [
  {
    title: (
      <div className="text-slate-600 text-base cursor-pointer">
        <HomeOutlined /> Trang Chủ
      </div>
    ),
    key: "home",
  },
  {
    title: (
      <div className="text-slate-800 text-base cursor-pointer">Giỏ hàng</div>
    ),
    key: "cart",
  },
];

const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleCheckOut = () => {};

  if (carts.length === 0) {
    return (
      <div className="px-8 py-4">
        <div className="py-6 md:px-16 xl:px-16 2xl:px-16">
          <Breadcrumb items={breadcrumbItems} />
          <div className="py-8 text-center">
            Vui lòng thêm sản phẩm vào giỏ hàng !
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="px-8 py-4">
      <CheckOutModal
        {...{
          open,
          setOpen,
          handleCheckOut,
          carts,
        }}
      />
      <div className="py-6 md:px-16 xl:px-16 2xl:px-16">
        <Breadcrumb items={breadcrumbItems} />
        <div className="overflow-x-auto my-4 w-full hidden md:block xl:block 2xl:block">
          <Table>
            <Table.Head>
              <Table.HeadCell>Thông tin sản phẩm</Table.HeadCell>
              <Table.HeadCell>Số lượng</Table.HeadCell>
              <Table.HeadCell>Đơn giá</Table.HeadCell>
              <Table.HeadCell>Thành tiền</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {carts?.map((item, index) => (
                <Table.Row
                  key={"cart-item" + index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div className="text-xs md:text-sm xl:text-sm 2xl:text-sm">
                      <div className="flex gap-4 items-center">
                        <img
                          className="w-16 h-16 md:w-20 md:h-20 xl:w-20 xl:h-20 2xl:w-20 2xl:h-20"
                          src={item.image}
                          alt="product-cart"
                        />
                        <div className="font-medium w-1/2">
                          <div className="truncate">{item.name}</div>
                          <div className="font-bold">
                            Size/Màu: {item.size} / {item.color}
                          </div>
                          <div className="text-red-500 font-bold cursor-pointer">
                            Xóa
                          </div>
                        </div>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-4 text-xs md:text-sm xl:text-sm 2xl:text-sm font-bold text-slate-900">
                      <MinusOutlined className="border-2 w-6 h-6 rounded-md flex justify-center  cursor-pointer" />
                      <div>{item.quantity}</div>
                      <PlusOutlined className="border-2 w-6 h-6 rounded-md flex justify-center cursor-pointer" />
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="text-xs md:text-sm xl:text-sm 2xl:text-sm text-rose-800 font-bold">
                      {formatPrice(item.price)}đ
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="text-xs md:text-sm xl:text-sm 2xl:text-sm text-rose-800 font-bold">
                      {formatPrice(item.quantity * item.price)}đ
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className="w-full my-4 max-h-96 overflow-y-scroll md:hidden xl:hidden 2xl:hidden scroll-cart">
          {carts?.map((item, index) => (
            <div key={"cart-item" + index}>
              <div className="py-2 px-2 flex gap-2 items-center">
                <img
                  className="w-20 h-20"
                  src={item.image}
                  alt="image-product"
                />
                <div className="text-xs">
                  <div className="break-words pb-1">{item.name}</div>
                  <div className="font-bold pb-1">
                    Size/Màu: {item.size} / {item.color}
                  </div>
                  <div className="text-red-500 font-bold cursor-pointer pb-1">
                    Xóa
                  </div>
                  <div className="flex text-xs items-center justify-between font-bold">
                    <div className="flex items-center gap-2 font-bold">
                      <MinusOutlined className="border-2 w-6 h-6 rounded-md flex justify-center text-slate-900 cursor-pointer" />
                      <div>{item.quantity}</div>
                      <PlusOutlined className="border-2 w-6 h-6 rounded-md flex justify-center text-slate-900 cursor-pointer" />
                    </div>
                    <div className="text-rose-800">
                      {formatPrice(item.quantity * item.price)}đ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="py-4 flex w-full justify-end">
          <div className="text-sm w-full md:w-80 xl:w-80 2xl:w-80 md:text-base xl:text-base 2xl:text-base">
            <div className="flex items-center justify-between">
              <div>Tổng tiền:</div>
              <div className="text-rose-800 font-bold">
                {formatPrice(330000)}đ
              </div>
            </div>
            <div
              onClick={() => setOpen(true)}
              className="py-3 px-2 mt-2 bg-black text-center text-slate-50 rounded-md cursor-pointer hover:bg-slate-800"
            >
              Thanh toán
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
