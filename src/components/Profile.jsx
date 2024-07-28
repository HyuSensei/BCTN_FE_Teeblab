import React from "react";
import { UploadOutlined } from "@ant-design/icons";

const Profile = () => {
  return (
    <div className="text-xs md:text-base xl:text-base 2xl:text-base">
      <div className="font-bold">Thông tin người dùng</div>
      <div className="avatar py-4 flex items-center justify-center">
        <div className="w-16 md:w-20 xl:w-20 2xl:w-20 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="font-medium flex items-center justify-center py-4">
        <div className="w-32 py-2 px-2 text-center cursor-pointer border-dashed border-2 border-slate-950">
          <UploadOutlined /> Tải lên
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full xl:w-110 2xl:w-110">
          <div className="py-2 font-medium">Họ tên:</div>
          <input type="text" className="input input-bordered w-full input-md" />
        </div>
        <div className="w-full xl:w-110 2xl:w-110">
          <div className="py-2 font-medium">Email:</div>
          <input type="text" className="input input-bordered w-full input-md" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full xl:w-110 2xl:w-110">
          <div className="py-2 font-medium">Số điện thoại:</div>
          <input type="text" className="input input-bordered w-full input-md" />
        </div>
        <div className="w-full xl:w-110 2xl:w-110">
          <div className="py-2 font-medium">Địa chỉ:</div>
          <input type="text" className="input input-bordered w-full input-md" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full xl:w-110 2xl:w-110">
          <div className="py-2 font-medium">Mật khẩu mới:</div>
          <input type="text" className="input input-bordered w-full input-md" />
        </div>
        <div className="w-full xl:w-110 2xl:w-110">
          <div className="py-2 font-medium">Nhập lại mật khẩu:</div>
          <input type="text" className="input input-bordered w-full input-md" />
        </div>
      </div>
      <div className="mt-4 bg-black py-3 rounded-md text-slate-50 font-bold text-center cursor-pointer">
        Lưu
      </div>
    </div>
  );
};

export default Profile;
