import React from "react";
import Section from "../../../../components/section/Section";
import { landingConfigs } from "./confs";

const Sections = () => {
  return (
    <>
      {landingConfigs.map((config, index) => (
        <Section key={index} {...config} />
      ))}
    </>
  );
};

export default Sections;
