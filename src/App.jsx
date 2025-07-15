import HeroSection from "./Components.jsx/HeroSection";
import Navbar from "./Components.jsx/Navbar";
import Price from "./Components.jsx/Price";
import Workflow from "./Components.jsx/Workflow";
import FeatureSection from "./Components.jsx/FeatureSection";
import Footer from "./Components.jsx/Footer";
import Testimonials from "./Components.jsx/Testimonials";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <Workflow></Workflow>
        <Price></Price>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
