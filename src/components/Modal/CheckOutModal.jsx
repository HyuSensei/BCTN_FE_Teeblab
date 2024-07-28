import React from "react";
import { Collapse, Modal } from "antd";
import { formatPrice } from "../../helpers/formatPrice";
import { MoneyCollectOutlined, WalletOutlined } from "@ant-design/icons";
import useScreen from "../../hook/useScreen";
import province from '../../const/province.json';
import district from '../../const/district.json';
import commune from '../../const/commune.json';

const CheckOutModal = ({ open, setOpen, handleCheckOut, carts = [] }) => {
  const { isMobile } = useScreen();
  const CartOrder = () => {
    return (
      <div className="w-full my-4 max-h-80 overflow-y-scroll">
        {carts?.map((item, index) => (
          <div key={"cart-item-modal" + index}>
            <div className="py-2 px-2 flex gap-2 items-center">
              <img
                className="w-20 h-20  md:w-24 md:h-24 xl:w-24 xl:h-24 2xl:w-24 2xl:h-24"
                src={item?.image}
                alt="image-product"
              />
              <div className="text-xs md:text-base xl:text-base 2xl:text-base">
                <div className="break-words pb-1">{item.name}</div>
                <div className="font-bold pb-1">
                  Size/Màu: {item.size} / {item.color}
                </div>
                <div className="font-bold">
                  <div>{item.quantity}</div>
                  <div className="text-rose-800">
                    {formatPrice(item.quantity * item.price)}đ
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <Modal
      className="px-2"
      width={!isMobile ? "850px" : ""}
      open={open}
      title="Thông tin đặt hàng"
      onOk={handleCheckOut}
      onCancel={() => {
        setOpen(false);
        setRate(0);
      }}
      footer={[
        <button
          key={"cancel"}
          onClick={() => {
            setOpen(false);
          }}
          className="bg-white border-slate-500 border px-4 py-2 mx-2 rounded-md"
        >
          Hủy
        </button>,
        <button
          key={"order"}
          className="bg-slate-950 text-slate-50 px-4 py-2 ml-2 rounded-md"
        >
          Đặt hàng
        </button>,
      ]}
    >
      <Collapse
        items={[
          {
            key: "1",
            label: `Đơn hàng (${carts.length} sản phẩm)`,
            children: <CartOrder />,
          },
        ]}
      />
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full xl:w-96 2xl:w-96">
            <div className="py-2 font-medium">Họ tên:</div>
            <input
              type="text"
              className="input input-bordered w-full input-md"
            />
          </div>
          <div className="w-full xl:w-96 2xl:w-96">
            <div className="py-2 font-medium">Số điện thoại:</div>
            <input
              type="text"
              className="input input-bordered w-full input-md"
            />
          </div>
        </div>
        <div className="py-2 font-medium">Địa chỉ:</div>
        <input type="text" className="input input-bordered w-full input-md" />
        <div className="py-2 font-medium">Tỉnh thành:</div>
        <select className="select select-bordered w-full">
          <option value={""} disabled selected>
            ---
          </option>
          {province?.map((item, index) => (
            <option key={"province-" + index}>{item.name}</option>
          ))}
        </select>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full xl:w-96 2xl:w-96">
            <div className="py-2 font-medium">Quận huyện:</div>
            <select className="select select-bordered w-full">
              <option value={""} disabled selected>
                ---
              </option>
              {district?.map((item, index) => (
                <option key={"district-" + index}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="w-full xl:w-96 2xl:w-96">
            <div className="py-2 font-medium">Phường xã:</div>
            <select className="select select-bordered w-full">
              <option value={""} disabled selected>
                ---
              </option>
              {commune?.map((item, index) => (
                <option key={"commune-" + index}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="py-2 h font-medium">Ghi chú (nếu có):</div>
        <textarea className="textarea textarea-bordered w-full h-32"></textarea>
        <div className="py-2 h font-medium">Phương thức thanh toán:</div>
        <div className="flex gap-3 flex-wrap items-center justify-between">
          <div className="px-2 py-4 border-2 rounded-md flex gap-2 items-center w-full xl:w-96 2xl:w-96">
            <input
              type="radio"
              name="order-type"
              className="radio"
              defaultChecked
            />
            <div className="flex items-center justify-between w-full">
              <div>Thanh toán khi nhận hàng</div>
              <div className="text-2xl">
                <MoneyCollectOutlined />
              </div>
            </div>
          </div>
          <div className="px-2 py-4 border-2 rounded-md flex gap-2 items-center w-full xl:w-96 2xl:w-96">
            <input type="radio" name="order-type" className="radio" />
            <div className="flex items-center justify-between w-full">
              <div>Thanh toán online</div>
              <div className="text-2xl">
                <WalletOutlined />
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 font-bold flex gap-2 items-center">
          <div>Tổng tiền:</div>
          <div className="text-rose-800">{formatPrice(330000)}đ</div>
        </div>
      </div>
    </Modal>
  );
};

export default CheckOutModal;
