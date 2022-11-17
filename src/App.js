import Home from "./pages/home";
import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import DataProvider from "./redux/store";
import Notify from "./components/alert/Alert";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshToken } from "./redux/actions/authAction";
import { getAllAccount } from "./redux/actions/accountAction";

const ComponentWithLayout = ({ Component }) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
    dispatch(getAllAccount());
  }, [dispatch]);

  return (
    <>
      <Notify />
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/"
            element={<ComponentWithLayout Component={Home} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
