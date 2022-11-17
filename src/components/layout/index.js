import React from "react";
import Header from "../header";
import {
  BsHouseDoorFill,
  BsFillCartFill,
  BsFillBookFill,
} from "react-icons/bs";
import { FaHistory, FaHandshake } from "react-icons/fa";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const { auth } = useSelector((state) => state);
  return (
    <div>
      <div className="sidebar">
        <div className="profile_info">
          <h4>Thuan PC</h4>
        </div>
        <span>SỐ DƯ {auth.user ? auth.user.wallet : 0} Đ</span>
        <a href="/">
          <BsHouseDoorFill />
          <span>Bảng Điều Khiển</span>
        </a>
        <a href="/">
          <BsFillCartFill />
          <span>Mua Tài Khoản</span>
        </a>
        <a href="/">
          <BsFillBookFill />
          <span>Mua Tài Liệu</span>
        </a>
        <a href="/">
          <FaHistory />
          <span>Lịch Sử Mua Hàng</span>
        </a>
        <a href="/">
          <FaHandshake />
          <span>Tiếp Thị Liên Kết</span>
        </a>
        <a href="/">
          <span>Settings</span>
        </a>
      </div>
      {/* <div className="mobile_nav">
        <div className="mobile_nav_items">
          <a href="/">
            <BsHouseDoorFill />
            <span>Bảng Điều Khiển</span>
          </a>
          <a href="/">
            <BsHouseDoorFill />
            <span>Bảng Điều Khiển</span>
          </a>
          <a href="/">
            <BsHouseDoorFill />
            <span>Bảng Điều Khiển</span>
          </a>
          <a href="/">
            <BsHouseDoorFill />
            <span>Bảng Điều Khiển</span>
          </a>
          <a href="/">
            <BsHouseDoorFill />
            <span>Bảng Điều Khiển</span>
          </a>
          <a href="/">
            <BsHouseDoorFill />
            <span>Bảng Điều Khiển</span>
          </a>
        </div>
      </div> */}
      <div className="content">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
