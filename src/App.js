import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChildrenHomeScreen from "./pages/ChildrenHomeScreen";
import ShoppingScreen from "./pages/ShoppingScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import ParentInfoScreen from "./pages/ParentInfoScreen";
import "./index.css";
import { sessionState, useChatSession } from "@chainlit/react-client";
import { useAuth } from "@chainlit/react-client";
import { useRecoilValue } from "recoil";
import { useApi } from "./ApiContext";
import WalletScreen from "./pages/WalletScreen";

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
          <Route path="/" element={<ChildrenHomeScreen />} />
          <Route path="/shop" element={<ShoppingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/signup2" element={<ParentInfoScreen />} />
          <Route path="/wallet" element={<WalletScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
