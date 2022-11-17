import React from "react";
import { ListGroup } from "react-bootstrap";
import { HiOutlineShoppingCart } from "react-icons/hi";

function History() {
  return (
    <div className=" history-wrapper">
      <div className="recent-order">
        <div className="recent-order__title">
          <h1>ĐƠN HÀNG GẦN ĐÂY</h1>
        </div>

        <ListGroup variant="flush" className="recent-order__list">
          <ListGroup.Item className="recent-order__item">
            <div>
              <HiOutlineShoppingCart />
              <span className="item-name">Luc</span> mua{" "}
              <span className="item-total">10</span> FBVIA tu 2019-2022 ban be
              tu 50 - 1000 ... - 500.000d
            </div>
            <span className="item-timestamp">2 ngay truoc</span>
          </ListGroup.Item>
          <ListGroup.Item className="recent-order__item">
            <div>
              <HiOutlineShoppingCart />
              <span className="item-name">Luc</span> mua{" "}
              <span className="item-total">10</span> FBVIA tu 2019-2022 ban be
              tu 50 - 1000 ... - 500.000d
            </div>
            <span className="item-timestamp">2 ngay truoc</span>
          </ListGroup.Item>
          <ListGroup.Item className="recent-order__item">
            <div>
              <HiOutlineShoppingCart />
              <span className="item-name">Luc</span> mua{" "}
              <span className="item-total">10</span> FBVIA tu 2019-2022 ban be
              tu 50 - 1000 ... - 500.000d
            </div>
            <span className="item-timestamp">2 ngay truoc</span>
          </ListGroup.Item>
          <ListGroup.Item className="recent-order__item">
            <div>
              <HiOutlineShoppingCart />
              <span className="item-name">Luc</span> mua{" "}
              <span className="item-total">10</span> FBVIA tu 2019-2022 ban be
              tu 50 - 1000 ... - 500.000d
            </div>
            <span className="item-timestamp">2 ngay truoc</span>
          </ListGroup.Item>
          <ListGroup.Item className="recent-order__item">
            <div>
              <HiOutlineShoppingCart />
              <span className="item-name">Luc</span> mua{" "}
              <span className="item-total">10</span> FBVIA tu 2019-2022 ban be
              tu 50 - 1000 ... - 500.000d
            </div>
            <span className="item-timestamp">2 ngay truoc</span>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="recent-deposit">
        <div className="recent-deposit__title">
          <h1>NẠP TIỀN GẦN ĐÂY</h1>
        </div>
        <ListGroup variant="flush" className="recent-deposit__list">
          <ListGroup.Item className="recent-deposit__item">
            <div>
              <HiOutlineShoppingCart />
              <span className="item-name">Luc</span> mua{" "}
              <span className="item-total">10</span> FBVIA tu 2019-2022 ban be
              tu 50 - 1000 ... - 500.000d
            </div>

            <span className="item-timestamp">2 ngay truoc</span>
          </ListGroup.Item>
          <ListGroup.Item className="recent-deposit__item">
            <div>
              <HiOutlineShoppingCart />
              <span className="item-name">Luc</span> mua{" "}
              <span className="item-total">10</span> FBVIA tu 2019-2022 ban be
              tu 50 - 1000 ... - 500.000d
            </div>

            <span className="item-timestamp">2 ngay truoc</span>
          </ListGroup.Item>
          <ListGroup.Item className="recent-deposit__item">
            <div>
              <HiOutlineShoppingCart />
              <span className="item-name">Luc</span> mua{" "}
              <span className="item-total">10</span> FBVIA tu 2019-2022 ban be
              tu 50 - 1000 ... - 500.000d
            </div>

            <span className="item-timestamp">2 ngay truoc</span>
          </ListGroup.Item>
          <ListGroup.Item className="recent-deposit__item">
            <div>
              <HiOutlineShoppingCart />
              <span className="item-name">Luc</span> mua{" "}
              <span className="item-total">10</span> FBVIA tu 2019-2022 ban be
              tu 50 - 1000 ... - 500.000d
            </div>

            <span className="item-timestamp">2 ngay truoc</span>
          </ListGroup.Item>
          <ListGroup.Item className="recent-deposit__item">
            <div>
              <HiOutlineShoppingCart />
              <span className="item-name">Luc</span> mua{" "}
              <span className="item-total">10</span> FBVIA tu 2019-2022 ban be
              tu 50 - 1000 ... - 500.000d
            </div>

            <span className="item-timestamp">2 ngay truoc</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default History;
