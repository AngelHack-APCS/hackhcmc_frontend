import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChildrenHomeScreen from "./pages/ChildrenHomeScreen";
import ShoppingScreen from "./pages/ShoppingScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import ParentInfoScreen from "./pages/ParentInfoScreen";
import ParentScreen from "./pages/ParentScreen";
import OneTimeCodeScreen from "./pages/OneTimeCodeScreen";
import "./index.css";
import { sessionState, useChatSession } from "@chainlit/react-client";
import { useAuth } from "@chainlit/react-client";
import { useRecoilValue } from "recoil";
import { useApi } from "./ApiContext";
import { Navigate } from "react-router-dom";

import WalletScreen from "./pages/WalletScreen";
import WalletParentScreen from "./pages/WalletParentScreen";
import ChildrenLoginScreen from "./pages/ChildrenLoginScreen";
import AuthenScreen from "./pages/AuthenScreen";

const userEnv = {};

const App = () => {
  const { connect } = useChatSession();
  const session = useRecoilValue(sessionState);
  const { accessToken, setAccessToken } = useAuth();
  const apiEndpoints = useApi();

  useEffect(() => {
    if (session?.socket.connected) {
      return;
    }
    fetch(`${apiEndpoints.aiApis}/custom-auth`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setAccessToken(data.token);

        connect({
          userEnv,
          accessToken: `Bearer: ${data.token}`,
        });
      })
      .catch((error) => {
        console.error("Failed to connect to server:", error);
        // Optionally, you can set some state here to inform the user
      });
  }, [connect, session?.socket.connected]);

  return (
    <Router>
      <div className="container">
        <Routes> 
          <Route path="/" element={<Navigate to="/auth" replace={true} />} />
          <Route path="/child" element={<ChildrenHomeScreen />} />
          <Route path="/auth" element={<AuthenScreen />} />
          <Route path="/shop" element={<ShoppingScreen />} />
          <Route path="/wallet" element={<WalletScreen />} />
          <Route path="/auth/parent/login" element={<LoginScreen />} />
          <Route path="/auth/child/login" element={<ChildrenLoginScreen />} />
          <Route path="/auth/parent/signup" element={<SignupScreen />} />
          <Route path="/auth/parent/signup2" element={<ParentInfoScreen />} />
          <Route path="/parent/wallet" element={<WalletParentScreen />} />
          <Route path="/parent/otc" element={<OneTimeCodeScreen />} />
          <Route path="/wallet" element={<WalletScreen />} />
          <Route path="/parent" element={<ParentScreen />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </div>
    </Router> 
  );
};

export default App;
