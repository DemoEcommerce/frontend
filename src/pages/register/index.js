import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import authImg from "../../assets/images/auth-logo.png";
import { register } from "../../redux/actions/authAction";

function Register() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cfPassword: "",
  });
  const { username, email, password, cfPassword } = formData;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };
  return (
    <div className="bg-form">
      <Form className="form-register">
        <div className="auth-logo__wrapper">
          <img alt="" src={authImg} />
        </div>
        <h3 style={{ textAlign: "center" }}>Đăng Ký</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            size="lg"
            value={username}
            placeholder="Enter username"
            name="username"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Địa chỉ Email</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={handleOnChange}
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            value={password}
            placeholder="Password"
            onChange={handleOnChange}
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nhập lại mật khẩu</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            value={cfPassword}
            placeholder="Enter password again"
            onChange={handleOnChange}
            name="cfPassword"
          />
        </Form.Group>
        <Form.Group className="mb-3 btn-wrapper">
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Đăng Ký
          </Button>
        </Form.Group>
        <p>
          Bạn không có tài khoản? <Link to={"/login"}>Đăng Nhập</Link>{" "}
        </p>
      </Form>
    </div>
  );
}

export default Register;
