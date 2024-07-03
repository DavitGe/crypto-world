import React from "react";
import EarlyFeatures from "./components/EarlyFeatures/EarlyFeatures";
import CurrencyBox from "../../components/currencyBox/CurrencyBox";

const LandingPage = () => {
  return (
    <main>
      <EarlyFeatures />
      <div className="h-screen bg-main">
        <CurrencyBox />
      </div>
    </main>
  );
};

export default LandingPage;
