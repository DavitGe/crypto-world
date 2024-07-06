import React from "react";
import EarlyFeatures from "./components/EarlyFeatures/EarlyFeatures";
import CurrencyBox from "../../components/currencyBox/CurrencyBox";
import Wallet from "./components/wallet/Wallet";

const LandingPage = () => {
  return (
    <main>
      <EarlyFeatures />
      <div className="mb-32" />
      <Wallet />
    </main>
  );
};

export default LandingPage;
