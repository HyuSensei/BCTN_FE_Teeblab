import React from "react";
import { Image } from "antd";
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
  // if (rates.length === 0) {
  //   return (
  //     <div className="text-sm md:text-base xl:text-base 2xl:text-xl">
  //       Sản phẩm chưa có đánh giá !
  //     </div>
  //   );
  // }
  return (
    <div className="w-full text-sm bg-gradient-to-t from-slate-50 to-fuchsia-200  px-4 py-4 rounded-md">
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
