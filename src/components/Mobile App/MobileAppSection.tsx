import img from "../../assets/images/mobile_app.jpg";
import './mobileapp.scss';
const MobileAppSection = () => {
  return (
    <div className="mobile_app_section">
      <div>
        <h1>Mobile App</h1>
        <p>
          Get your daily dose of crypto at any place, anytime, without any
          hassle. Dive into a fully crypto-focused, socially gamified atmosphere
          and unite with our community. Dive into a fully crypto-focused,
          socially gamified atmosphere with our lovely community
        </p>
        <button className="button">COMING SOON</button>
      </div>
      <img src={img} alt={img} />
    </div>
  );
};

export default MobileAppSection;
