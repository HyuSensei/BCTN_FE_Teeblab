import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HomeOutlined, SendOutlined } from "@ant-design/icons";
import { Card } from "antd";
import banner from "../resources/slide_1.png";
import ProductList from "../components/ProductList";

const Category = () => {
  return (
    <div className="px-8 py-4">
      <div className="py-6 md:px-16">
        <Breadcrumb>
          <Breadcrumb.Item>
            <div className="text-slate-600 text-base cursor-pointer">
              <HomeOutlined /> Trang chủ
            </div>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <div className="text-slate-800 text-base cursor-pointer">
              Danh mục sản phẩm
            </div>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="text-sm md:text-base xl:text-base 2xl:text-base py-4 flex gap-4 flex-wrap xl:flex-nowrap">
          <div className="w-full xl:w-1/4">
            <Card title="Danh mục sản phẩm" bordered={false}>
              <div className="py-3 hover:bg-slate-100 px-2 rounded-md cursor-pointer">
                <SendOutlined className="pr-1" /> Áo Thun
              </div>
              <div className="py-3 hover:bg-slate-100 px-2 rounded-md cursor-pointer">
                <SendOutlined className="pr-1" /> Baby Tee
              </div>
              <div className="py-3 hover:bg-slate-100 px-2 rounded-md cursor-pointer">
                <SendOutlined className="pr-1" /> Áo Pholo
              </div>
              <div className="py-3 hover:bg-slate-100 px-2 rounded-md cursor-pointer">
                <SendOutlined className="pr-1" /> Áo Sơ Mi
              </div>
              <div className="py-3 hover:bg-slate-100 px-2 rounded-md cursor-pointer">
                <SendOutlined className="pr-1" /> Áo Hoodie
              </div>
              <div className="py-3 hover:bg-slate-100 px-2 rounded-md cursor-pointer">
                <SendOutlined className="pr-1" /> Áo Khoác
              </div>
            </Card>
          </div>
          <div className="flex-grow xl:w-3/4 2xl:w-3/4">
            <Card title="Danh sách sản phẩm" bordered={false}>
              <img
                className="w-full rounded-md"
                src={banner}
                alt="banner-image"
              />
              <ProductList />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
