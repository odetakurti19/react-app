import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "./components/Toast/Toast";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <ToastProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ToastProvider>
    </Provider>
  </>
);

