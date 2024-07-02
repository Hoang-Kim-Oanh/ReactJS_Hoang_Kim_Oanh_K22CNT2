import "./App.css";
import axios from "./api/HkoApi";
import React, { useEffect, useState } from "react";
import HkoListUser from "./components/HkoListUser";
function HkoApp() {
  const [hkoUser, setHkoUser] = useState([]);
  const hkoGetUser = async () => {
    try {
      const hkoUserResponse = await axios.get("hkoUseres");
      setHkoUser(hkoUserResponse.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    hkoGetUser();
  }, []);
  return (
    <div className="App">
      <HkoListUser renderHkoUser={hkoUser} />
    </div>
  );
}

export default HkoApp;
