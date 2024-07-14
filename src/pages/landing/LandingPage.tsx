import EarlyFeatures from "./components/EarlyFeatures/EarlyFeatures";
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
