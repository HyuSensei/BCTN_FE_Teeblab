import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LayoutUser = lazy(() => import("../components/Layout/LayoutUser"));
const HomePage = lazy(() => import("../pages/HomePage"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Detail = lazy(() => import("../pages/Detail"));
const Cart = lazy(() => import("../pages/Cart"));

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <HomePage />
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Login />
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Register />
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/detail"
        element={
          <Suspense fallback={<div></div>}>
            <LayoutUser>
              <Detail />
            </LayoutUser>
          </Suspense>
        }
      />
      <Route
        path="/"
        element={
          <Suspense fallback={<div></div>}>
            <Cart />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
