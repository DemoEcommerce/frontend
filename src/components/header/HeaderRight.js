import React from "react";

import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import avatarImg from "../../assets/images/avatar.jpg";

function HeaderRight() {
  const { auth } = useSelector((state) => state);
  return (
    <div className="header-right">
      <ul>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div href="/" className="btn--notify">
            <IoMdNotificationsOutline />
            <div className="notify-wrapper">Notification</div>
          </div>
        </li>
        <li>
          <div href="/" className="btn--login">
            <img src={avatarImg} alt="" />
            {!auth.token ? "Bạn chưa đăng nhập" : auth.user.username}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HeaderRight;
