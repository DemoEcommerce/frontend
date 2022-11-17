import { Button, Card } from "react-bootstrap";
import IconZalo from "../../assets/icons/zalo-icon.svg";
import { HiShoppingCart } from "react-icons/hi";
import { BsFlagFill } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import { TbBuildingWarehouse } from "react-icons/tb";
import BlockIcon from "../blockIcon";
import ZaloIcon from "../../assets/icons/zalo-icon.svg";
import TiktokIcon from "../../assets/icons/tiktok-icon.svg";
import TelegramIcon from "../../assets/icons/telegram-icon.svg";
import WeChatIcon from "../../assets/icons/wechat-icon.svg";
import FbIcon from "../../assets/icons/facebook-icon.svg";

function ProductItem({
  title,
  description,
  price,
  inventory,
  type,
  sold,
  nation,
}) {
  const getIconType = () => {
    switch (type) {
      case "zalo":
        return ZaloIcon;
      case "facebook":
        return FbIcon;
      case "telegram":
        return TelegramIcon;
      case "wechat":
        return WeChatIcon;
      default:
        return TiktokIcon;
    }
  };

  return (
    <Card
      style={{ minWidth: "20rem", maxWidth: "25rem", margin: "5px 0" }}
      className="card-product"
    >
      <Card.Body className="card-product__wrapper">
        <div className="product-content">
          <div className="content-title">
            <img src={getIconType()} alt="" />
            {title}
          </div>
          <div className="content-des">
            {description ? description : "Không có mô tả"}
          </div>
        </div>
        <div className="product-bottom">
          <div className="status">
            <ul className="list-info">
              <li>
                <BlockIcon Icon={<BiMoney />} title={price} color={"red"} />
              </li>
              <li>
                <BlockIcon
                  Icon={<BsFlagFill />}
                  title={nation}
                  color={"#DB7F2D"}
                />
              </li>
            </ul>
            <ul className="list-info">
              <li>
                <BlockIcon
                  Icon={<TbBuildingWarehouse />}
                  title={inventory}
                  color={"#67B82F"}
                />
              </li>
              <li>
                <BlockIcon
                  Icon={<HiShoppingCart />}
                  title={sold}
                  color={"#4EB4B4"}
                />
              </li>
            </ul>
          </div>
          <div className="action">
            <Button size="md" className="btn-buy">
              <HiShoppingCart style={{ marginRight: "5px" }} />
              Mua
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
