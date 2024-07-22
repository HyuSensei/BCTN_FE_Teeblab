import React from "react";
import { Navbar, Footer, Dropdown, TextInput } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../../resources/logo.png";
import { HiSearch } from "react-icons/hi";

const LayoutUser = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-fuchsia-100 to-purple-50">
      <Navbar className="py-5" fluid rounded>
        <Navbar.Brand>
          <img src={logo} width={"180px"} height={"180px"} alt="Logo" />
        </Navbar.Brand>
        <div className="flex gap-2 md:order-2">
          <TextInput type="text" placeholder="Search..." rightIcon={HiSearch} />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>Trang Chủ</Navbar.Link>
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
          <Navbar.Link>Giỏ Hàng</Navbar.Link>
          <Navbar.Link>Liên Hệ</Navbar.Link>
          <Navbar.Link>Tài Khoản</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="flex-grow">{children}</div>
      <Footer container>
        <div className="w-full px-8">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="pb-4 px-6">
              <Footer.Brand
                className="h-full"
                src={logo}
                width={"160px"}
                height={"160px"}
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
