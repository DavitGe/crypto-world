import React from "react";
import EarlyFeatures from "./components/EarlyFeatures/EarlyFeatures";
import CurrencyBox from "../../components/currencyBox/CurrencyBox";
import { landingConfigs } from "./components/Sections/confs";
import Section from "../../components/section/Section";
import Sections from "./components/Sections/Sections";

const LandingPage = () => {
  return (
    <main>
      <EarlyFeatures />
      <div className="mb-32" />
      <Sections />
    </main>
  );
};

export default LandingPage;
