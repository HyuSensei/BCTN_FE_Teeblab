import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Page from "../components/Layout/Page";

const LayoutUser = lazy(() => import("../components/Layout/LayoutUser"));
const LayoutAdmin = lazy(() => import("../components/Layout/LayoutAdmin"));
const HomePage = lazy(() => import("../pages/HomePage"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Detail = lazy(() => import("../pages/Detail"));
const Cart = lazy(() => import("../pages/Cart"));
const Size = lazy(() => import("../pages/Size"));
const Account = lazy(() => import("../pages/Account"));
const Category = lazy(() => import("../pages/Category"));
const NotFound = lazy(() => import("../pages/NotFound"));
const LoginAdmin = lazy(() => import("../pages/LoginAdmin"));
const Dashboard = lazy(() => import("../pages/DashBoard"));

const Router = () => {
  return (
    <Routes>
      {/* customer */}
      <Route
        path="/"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Page title={"TEELAB"}>
                <HomePage />
              </Page>
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Page title={"TEELAB | Đăng Nhập"}>
                <Login />
              </Page>
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Page title={"TEELAB | Đăng Ký"}>
                <Register />
              </Page>
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/detail"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Page title={"TEELAB | Chi Tiết Sản Phẩm"}>
                <Detail />
              </Page>
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Page title={"TEELAB | Giỏ Hàng"}>
                <Cart />
              </Page>
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/size"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Page title={"TEELAB | Bảng Size"}>
                <Size />
              </Page>
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/account"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Page title={"TEELAB | Tài Khoản"}>
                <Account />
              </Page>
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/category"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Page title={"TEELAB | Danh Mục Sản Phẩm"}>
                <Category />
              </Page>
            </LayoutUser>
          </Suspense>
        }
      />
      {/* admin */}
      <Route
        path="/admin"
        element={
          <Suspense fallback={<div></div>}>
            <Page title={"TEELAB | Đăng Nhập Admin"}>
              <LoginAdmin />
            </Page>
          </Suspense>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <Suspense fallback={<div></div>}>
            <Page title={"TEELAB | Dashboard"}>
              <LayoutAdmin title={"THÔNG TIN THỐNG KÊ"}>
                <Dashboard />
              </LayoutAdmin>
            </Page>
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div></div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
