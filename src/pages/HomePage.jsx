import React from "react";
import { Carousel } from "flowbite-react";
import slide_1 from "../resources/slide_1.png";
import slide_2 from "../resources/slide_2.png";
import slide_3 from "../resources/slide_3.png";
import slide_4 from "../resources/slide_4.png";
import slide_5 from "../resources/slide_5.png";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <>
      <div className="h-56 md:h-96 sm:h-64 xl:h-48 2xl:h-48">
        <Carousel slideInterval={5000}>
          <img src={slide_2} alt="..." />
          <img src={slide_1} alt="..." />
          <img src={slide_3} alt="..." />
          <img src={slide_4} alt="..." />
          <img src={slide_5} alt="..." />
        </Carousel>
      </div>
      <div className="py-4">
        <div className="text-3xl text-center font-bold">Enjoy Your Youth!</div>
        <div className="text-center px-4 w-full flex items-center justify-center">
          <div className="sm:w-full md:w-1/2 py-2">
            Không chỉ là thời trang, TEELAB còn là “phòng thí nghiệm” của tuổi
            trẻ - nơi nghiên cứu và cho ra đời nguồn năng lượng mang tên
            “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng
            động và trẻ trung.
          </div>
        </div>
      </div>
      <ProductList />
    </>
  );
};

export default HomePage;
