import React from "react";

const Register = () => {
  return (
    <div className="py-8">
      <div className="w-full flex items-center justify-center flex-1 ">
        <div className="max-w-xl w-full p-6 bg-white rounded-xl">
          <form className="space-y-4 py-8">
            <div className="text-xl font-bold text-center">ĐĂNG KÝ</div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Họ và tên:
              </label>
              <input
                type="text"
                className={`mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số điện thoại:
              </label>
              <input
                type="text"
                className={`mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Địa chỉ:
              </label>
              <input
                type="text"
                className={`mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                className={`mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mật khẩu:
              </label>
              <input
                type="password"
                className={`mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300`}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full font-bold bg-sky-950 text-white p-2 rounded-md hover:bg-sky-800 focus:outline-none"
              >
                Đăng ký
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center font-bold">
              <p>
                Bạn đã có tài khoản ?
                <span className="underline cursor-pointer"> Đăng nhập</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
