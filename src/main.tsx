import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: "#f9faff" } }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
