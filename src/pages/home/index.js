import React from "react";
import History from "../../components/history";
import Sell from "../../components/sell";
import WelCome from "../../components/welcome";

function Home() {
  return (
    <div className="home">
      <WelCome />
      <Sell />
      <History />
    </div>
  );
}

export default Home;
