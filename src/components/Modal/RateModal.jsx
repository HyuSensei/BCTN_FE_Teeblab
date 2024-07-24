import { Modal } from "antd";
import React from "react";
import { Rate } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const RateModal = ({
  open,
  setOpen,
  handleRate,
  rate,
  setRate,
  setHoverValue,
  hoverValue,
}) => {
  const createIcon = (index) => {
    const fillColor =
      (rate && rate >= index) || (hoverValue && hoverValue >= index)
        ? "#cd3f34"
        : "#597e6a";

    return (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={index}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
            fill={fillColor}
          ></path>
        </g>
      </svg>
    );
  };

  const customIcons = () => {
    return {
      1: createIcon(1),
      2: createIcon(2),
      3: createIcon(3),
      4: createIcon(4),
      5: createIcon(5),
    };
  };
  return (
    <Modal
      className="px-2"
      open={open}
      title="Đánh giá sản phẩm"
      onOk={handleRate}
      onCancel={() => {
        setOpen(false);
        setRate(0);
      }}
      footer={[
        <button
          key={"cancel"}
          onClick={() => {
            setOpen(false);
            setRate(0);
          }}
          className="bg-white border-slate-500 border px-4 py-2 mx-2 rounded-md"
        >
          Hủy
        </button>,
        <button
          key={"rate"}
          className="bg-slate-950 text-slate-50 px-4 py-2 ml-2 rounded-md"
        >
          Đánh giá
        </button>,
      ]}
    >
      <div className="w-full flex gap-2 text-sm py-2">
        <img
          className="rounded-md w-16"
          src={
            "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1223-1.jpg?v=1721294431393"
          }
          alt="product-rate"
        />
        <div className="font-medium">
          Áo Thun Teelab Local Brand Unisex Jersey No.88 Tshirt TS274
        </div>
      </div>
      <div className="flex items-center justify-center py-2">
        <Rate
          value={rate}
          defaultValue={0}
          onHoverChange={(item) => {
            setHoverValue(item);
          }}
          onChange={(value) => {
            setRate(value);
          }}
          style={{ color: "#d1402c" }}
          character={({ index = 0 }) => customIcons()[index + 1]}
        />
      </div>
      <div className="flex items-center justify-center cursor-pointer">
        <div className="w-32 mt-2 py-2 text-center border-2 border-dashed">
          <UploadOutlined /> Tải lên
        </div>
      </div>
      <div className="w-full">
        <div className="py-2 font-medium">Họ tên:</div>
        <input type="text" className="input input-bordered w-full input-md" />
        <div className="py-2 font-medium">Nội dung:</div>
        <textarea className="textarea textarea-bordered w-full h-32"></textarea>
      </div>
    </Modal>
  );
};

export default RateModal;
