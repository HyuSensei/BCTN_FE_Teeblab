import { Breadcrumb } from "flowbite-react";
import React, { useState } from "react";
import {
  HomeOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import OrderHistory from "../components/Order/OrderHistory";
import Profile from "../components/Profile";

const Account = () => {
  const [selected, setSelected] = useState("profile");
  const AccountContent = () => {
    switch (selected) {
      case "profile":
        return <Profile />;
      case "order":
        return <OrderHistory />;
      default:
        return <Profile />;
    }
  };
  return (
    <div className="px-8 py-4">
      <div className="py-6 md:px-16 xl:px-16 2xl:px-16">
        <Breadcrumb>
          <Breadcrumb.Item>
            <div className="text-slate-600 text-base cursor-pointer">
              <HomeOutlined /> Trang chủ
            </div>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <div className="text-slate-800 text-base cursor-pointer">
              Tài khoản
            </div>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="py-4 flex gap-4 flex-wrap">
          <div className="w-full xl:w-1/4 2xl:w-1/4">
            <Card
              title={
                <div className="flex py-2 gap-2 items-center text-xs md:text-sm xl:text-sm 2xl:text-sm">
                  <div className="avatar">
                    <div className="w-10 md:w-14 xl:w-14 2xl:w-14 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div>
                    <div>Phan Tiến Huy</div>
                    <div>huyphan1232002@gmail.com</div>
                  </div>
                </div>
              }
              bordered={false}
              className="w-full"
            >
              <div className="px-2 text-sm md:text-base xl:text-base 2xl:text-base">
                <div
                  onClick={() => setSelected("profile")}
                  className="py-2 px-4 mb-2 bg-slate-50 hover:bg-slate-200 rounded-md font-medium cursor-pointer text-slate-700"
                >
                  <UserOutlined /> Hồ sơ
                </div>
                <div
                  onClick={() => setSelected("order")}
                  className="py-2 px-4 mb-2 bg-slate-50 hover:bg-slate-200  rounded-md font-medium cursor-pointer text-slate-700"
                >
                  <ShoppingCartOutlined /> Đơn hàng
                </div>
                <div className="py-2 px-4 mb-2 bg-slate-50 hover:bg-slate-200  rounded-md font-medium cursor-pointer text-slate-700">
                  <LogoutOutlined /> Đăng xuất
                </div>
              </div>
            </Card>
          </div>
          <div className="flex-grow">
            <Card bordered={false} className="w-full">
              <div className="px-2 text-sm">
                <AccountContent />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
