import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import authImg from "../../assets/images/auth-logo.png";
import { login } from "../../redux/actions/authAction";

function Login() {
  const [dataForm, setDataForm] = useState({ username: "", password: "" });
  const { username, password } = dataForm;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(dataForm));
  };
  return (
    <div className="bg-form">
      <Form className="form-login">
        <div className="auth-logo__wrapper">
          <img alt="" src={authImg} />
        </div>
        <h3 style={{ textAlign: "center" }}>Đăng Nhập</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            name="username"
            value={username}
            placeholder="Enter username"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 btn-wrapper">
          <Button variant="primary" onClick={handleSubmit} size="lg">
            Đăng Nhập
          </Button>
        </Form.Group>
        <p>
          Bạn không có tài khoản? <Link to={"/register"}>Đăng Ký</Link>{" "}
        </p>
      </Form>
    </div>
  );
}

export default Login;
