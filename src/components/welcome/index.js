import React from "react";
import { Card } from "react-bootstrap";

function WelCome() {
  return (
    <div className="welcome-wrapper">
      <Card className="card-welcome">
        <Card.Body>
          <ul>
            <li className="text-bold ">
              NGUYENLIEUQUANGCAO.COM XIN KÍNH CHÀO QUÝ KHÁCH !{" "}
            </li>
            <li className="text-bold ">
              Hotline liên hệ và chăm sóc khách hàng 24/24
            </li>
            <li className="text-bold ">0123456789</li>
            <li>
              Quý khách sạu khi mua hàng, các File sẽ được chuyển sang Email mà
              quý khách đăng ký trong vòng 5 phút.
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WelCome;
