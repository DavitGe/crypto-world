import React, { ReactNode } from "react";
import Header from "../../components/layout/mainLayout/Header";

const Home: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  );
};

export default Home;
