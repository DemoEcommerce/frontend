import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ProductItem from "./ProductItem";
import ZaloIcon from "../../assets/icons/zalo-icon.svg";
import TiktokIcon from "../../assets/icons/tiktok-icon.svg";
import TelegramIcon from "../../assets/icons/telegram-icon.svg";
import WeChatIcon from "../../assets/icons/wechat-icon.svg";
import FbIcon from "../../assets/icons/facebook-icon.svg";
import CartIcon from "../../assets/icons/cart-icon.svg";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const LIST_FILTER = [
  { title: "TẤT CẢ SẢN PHẨM", logo: CartIcon, value: "all" },
  { title: "TÀI KHOẢN ZALO", logo: ZaloIcon, value: "zalo" },
  { title: "VIA FACEBOOK", logo: FbIcon, value: "facebook" },
  { title: "TELEGRAM", logo: TelegramIcon, value: "telegram" },
  { title: "TIKTOK", logo: TiktokIcon, value: "tiktok" },
  { title: "WECHAT", logo: WeChatIcon, value: "wechat" },
];

function Sell() {
  const { account } = useSelector((state) => state);
  const [typeSelected, setTypeSelected] = useState("all");

  const getListFilter = () => {
    if (typeSelected === "all") return account?.listAccount;
    else return account?.listAccount?.filter((el) => el.type === typeSelected);
  };

  return (
    <div className=" sell-wrapper">
      <div className="sell-title">
        <h1>MUA TÀI KHOẢN</h1>
      </div>
      <div className="sell-body">
        <div className="filter-wrapper">
          {LIST_FILTER.map((el, idx) => (
            <div
              onClick={() => setTypeSelected(el.value)}
              className={`filter-item ${typeSelected === el.value && "active"}`}
              key={idx}
            >
              <img src={el.logo} alt="" />
              <p>{el.title}</p>
            </div>
          ))}
        </div>
        <div className="list-product">
          {account?.listAccount &&
            getListFilter().map((el, idx) => (
              <ProductItem
                title={el.title}
                description={el.description}
                price={el.type}
                type={el.type}
                nation={el.nation}
                inventory={el.inventory}
                sold={el.sold}
                key={idx}
              />
            ))}
        </div>
        <div className="pagination-wrapper">
          {/* <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{19}</Pagination.Item>
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination> */}
          <Button variant="outline-primary" className="btn--icon">
            <FaCartArrowDown /> Lịch Sử Mua Hàng
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sell;
