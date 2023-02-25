
import EcosystemSection from "./components/Ecosystem/EcosystemSection";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MobileAppSection from "./components/Mobile App/MobileAppSection";
import OperationalTeam from "./components/Operational Team/molecules/OperationalTeam";
import "./styles/Globals.scss";

const App = () => {
  return <div className="App">
    <Home/>
    <EcosystemSection/>
    <MobileAppSection/>
    <OperationalTeam/>
    <Footer/>
  </div>;
};

export default App;
