import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { setSocketDispatch } from "./Redux/ChatSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

setSocketDispatch(store.dispatch);

root.render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
    />
  </Provider>
);
