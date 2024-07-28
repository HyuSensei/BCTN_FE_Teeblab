import React from "react";
import { Image, Rate } from "antd";
import { Divider } from "antd";

const data = [
  "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-7838-1.jpg?v=1721293980853",
  "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-2299-1.jpg?v=1721294051250",
  "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1223-1.jpg?v=1721294431393",
  "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1102-1.jpg?v=1717755860757",
  "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-7838-1.jpg?v=1721293980853",
  "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-2299-1.jpg?v=1721294051250",
  "https://bizweb.dktcdn.net/thumb/large/100/415/697/products/img-1223-1.jpg?v=1721294431393",
];

const RateList = ({ rates = [] }) => {
  const createIcon = (index, rate) => {
    const fillColor = rate && rate >= index ? "#cd3f34" : "#597e6a";
    return (
      <svg
        width="20px"
        height="20px"
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
      1: createIcon(1, 5),
      2: createIcon(2, 5),
      3: createIcon(3, 4),
      4: createIcon(4, 3),
      5: createIcon(5, 2),
    };
  };
  // if (rates.length === 0) {
  //   return (
  //     <div className="text-sm md:text-base xl:text-base 2xl:text-xl">
  //       Sản phẩm chưa có đánh giá !
  //     </div>
  //   );
  // }
  return (
    <div className="w-full text-sm px-4 py-4 rounded-md">
      {Array.from({ length: 5 }).map((_, rateIndex) => (
        <div key={"rate-item-" + rateIndex}>
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-10 md:w-14 xl:w-14 2xl:w-14 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <div className="font-medium">Phan Tiến Huy</div>
              <div>21-09-2024</div>
              <div className="pt-1">
                <Rate
                  disabled
                  character={({ index = 0 }) => customIcons()[index + 1]}
                />
              </div>
              <div className="break-all">Đánh giá: Sản phẩm rất tốt !</div>
            </div>
          </div>
          <div className="py-2 px-12 md:px-16 xl:px-16 2xl:px-16 flex gap-2 flex-wrap w-full">
            {data.map((item, index) => (
              <div
                key={"image-rate-" + index}
                className="w-16 md:w-20 xl:w-24 2xl:w-24"
              >
                <Image src={item} />
              </div>
            ))}
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default RateList;
