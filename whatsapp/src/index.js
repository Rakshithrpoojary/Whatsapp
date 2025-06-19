import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Storecontext from "../src/Store/Context";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Store/Reduxstore";
import SocketContext from "./Store/Socketcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={Store}>
      <SocketContext>
        <Storecontext>
          <App />
          <ToastContainer />
        </Storecontext>
      </SocketContext>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
