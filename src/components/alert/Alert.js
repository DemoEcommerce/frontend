import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "./Loading";
// import Toast from "./Toast";

const Notify = () => {
  const { alert } = useSelector((state) => state);

  React.useEffect(() => {
    if (alert.success) {
      toast.success(alert.success);
    } else if (alert.error) {
      toast.error(alert.error);
    }
  }, [alert]);

  return (
    <div>
      {alert.loading && <Loading />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Notify;
