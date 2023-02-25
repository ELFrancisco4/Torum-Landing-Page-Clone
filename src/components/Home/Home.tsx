import Nav from "../Navigation/Nav";
import "./home.scss";
import Cryptos from "./molecules/Cryptos";
import img from '../../assets/images/Torum_rocket.png'
const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="defi">
        <h1>Decentralized Finance</h1>
        <p>
          Torum is a revolutionary SocialFi ecosystem designed to connect
          worldwide
        </p>
        <p>cryptocurrency users.</p>
        <button className="button">Go to the Socialfi</button>
      </div>
      <Cryptos className="crypto_logos" />

      <div className="home_details">
        <img src={img} alt={img} />

        <div className="home_details_text">
          <h1>Comprehensive and Scalable Crypto Social Media Platform</h1>
          <p>
            Dive into a fully crypto-focused, socially gamified atmosphere and
            unite with our lovely community from all around the world. No matter
            if you are a crypto newbie or a blockchain veteran. Torum is packed
            with various features and functionalities.
          </p>
          <button className="button">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
