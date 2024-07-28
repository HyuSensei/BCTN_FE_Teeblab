import React, { useEffect, useState } from "react";
import {
  BarChartOutlined,
  UsergroupAddOutlined,
  CarryOutOutlined,
  HeartOutlined,
  LogoutOutlined,
  SkinOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import useScreen from "../../hook/useScreen";
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Thống kê", "1", <BarChartOutlined />),
  getItem("Người dùng", "2", <UsergroupAddOutlined />),
  getItem("Đơn hàng", "3", <CarryOutOutlined />),
  getItem("Sản phẩm", "4", <SkinOutlined />),
  getItem("Đánh giá", "5", <HeartOutlined />),
  getItem("Đăng xuất", "6", <LogoutOutlined />),
];
const LayoutAdmin = ({ children, title = "" }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { isMobile } = useScreen();
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMobile]);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        {!isMobile && !collapsed && (
          <div className=" text-slate-50 font-bold py-4 text-center text-xl">
            <DashboardOutlined /> DASHBOARD
          </div>
        )}
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="bg-gradient-to-t from-slate-100 to-slate-400">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div className="py-4 w-full">
            <div className="font-bold text-sm md:text-2xl">{title}</div>
            {children}
          </div>
        </Content>
        <Footer
          className="bg-gradient-to-t from-slate-100 to-slate-400"
          style={{
            textAlign: "center",
          }}
        >
          <div className="font-medium">
            Admin ©{new Date().getFullYear()} Created by Teelab
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutAdmin;
