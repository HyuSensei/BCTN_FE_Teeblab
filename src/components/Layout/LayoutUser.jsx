import React from "react";
import { Navbar, Footer, Dropdown, TextInput } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../../resources/logo.png";
import { HiSearch } from "react-icons/hi";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const LayoutUser = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-r from-fuchsia-50  to-fuchsia-100 ">
      <Navbar className="py-5" fluid rounded>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            className="w-32 md:w-40 xl:w-40 2xl:w-44 cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </Navbar.Brand>
        <div className="flex items-center gap-4 md:order-2">
          <TextInput type="text" placeholder="Search..." rightIcon={HiSearch} />
          <div className="cursor-pointer">
            <Badge count={1}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#4b4e51" }}
              />
            </Badge>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="cursor-pointer">
          <Navbar.Link onClick={() => navigate("/")}>Trang Chủ</Navbar.Link>
          <Navbar.Link>
            <Dropdown label="Danh Mục" inline>
              <Dropdown.Item>Áo Thun</Dropdown.Item>
              <Dropdown.Item>Baby Tee</Dropdown.Item>
              <Dropdown.Item>Áo Polo</Dropdown.Item>
              <Dropdown.Item>Áo Sơ Mi</Dropdown.Item>
              <Dropdown.Item>Hoodie</Dropdown.Item>
              <Dropdown.Item>Áo Khoác</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link onClick={() => navigate("/size")}>Bảng Size</Navbar.Link>
          <Navbar.Link>
            <Dropdown label="Tài khoản" inline>
              <Dropdown.Item onClick={() => navigate("/login")}>
                Đăng Nhập
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/register")}>
                Đang ký
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/account")}>
                Hồ Sơ
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="flex-grow">{children}</div>
      <Footer container>
        <div className="w-full px-8">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="pb-4">
              <Footer.Brand
                className="h-full w-32 md:w-40 xl:w-40 2xl:w-44 rounded-xl"
                src={logo}
                alt="logo-teelab"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about us" />
                <Footer.LinkGroup col>
                  <Footer.Link>Trang chủ</Footer.Link>
                  <Footer.Link>Tất cả sản phẩm</Footer.Link>
                  <Footer.Link>Kiểm tra đơn hàng</Footer.Link>
                  <Footer.Link>Hệ Thống Cửa Hàng</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link>Facebook</Footer.Link>
                  <Footer.Link>Instagram</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Chính sách cửa hàng" />
                <Footer.LinkGroup col>
                  <Footer.Link>Chính sách mua hàng</Footer.Link>
                  <Footer.Link>Chính sách bảo mật</Footer.Link>
                  <Footer.Link>Phương thức thanh toán</Footer.Link>
                  <Footer.Link>Chính sách giao nhận</Footer.Link>
                  <Footer.Link>Chính sách đổi trả</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="TeeLab" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon icon={BsFacebook} />
              <Footer.Icon icon={BsInstagram} />
              <Footer.Icon icon={BsTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default LayoutUser;
