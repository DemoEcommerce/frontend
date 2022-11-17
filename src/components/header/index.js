import React from "react";
import { Button, Navbar } from "react-bootstrap";
import HeaderRight from "./HeaderRight";
import { HiMenu } from "react-icons/hi";
import { GiWallet } from "react-icons/gi";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { auth } = useSelector((state) => state);
  return (
    <>
      <Navbar className="header" variant="light" fixed="top">
        <Navbar.Brand className="header-left" href="/">
          <HiMenu className="icon-menu" />
          <span className="info-wallet">
            <GiWallet /> Ví: 0đ
          </span>
          {!auth.token && (
            <Link to="/login">
              <Button className="btn--icon" variant="outline-danger" size="sm">
                <BiLogIn /> Đăng nhập
              </Button>
            </Link>
          )}
        </Navbar.Brand>
        <HeaderRight />
      </Navbar>
    </>
  );
}

export default Header;
