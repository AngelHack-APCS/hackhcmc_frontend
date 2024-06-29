import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChainlitAPI, ChainlitContext } from "@chainlit/react-client";
import { RecoilRoot } from "recoil";
import { ApiProvider } from "./ApiContext";

const CHAINLIT_SERVER = "http://127.0.0.1:8001/chainlit";

const apiClient = new ChainlitAPI(CHAINLIT_SERVER, "webapp");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChainlitContext.Provider value={apiClient}>
      <ApiProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ApiProvider>
    </ChainlitContext.Provider>
  </React.StrictMode>
);
