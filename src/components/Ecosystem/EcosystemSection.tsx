import Cryptos from "../Home/molecules/Cryptos";
import img from "../../assets/images/ecosystem.jpg";
import img2 from "../../assets/images/images.jpg";
import img3 from "../../assets/images/images1.jpg";
import "../Ecosystem/ecosystem.scss";
const EcosystemSection = () => {
  return (
    <div className="ecosystem">
      <div className="ecosystem_overview">
        <div>
          {" "}
          <h1>Ecosystem Overview</h1>
          <p>
            With a hybrid-decentralized crypto social media serving as the
            backbone of the entire ecosystem, the integrations of Torum NFT
            Marketplace and Torum Finance succeed as complementary additions to
            connect crypto projects and users of different interests from all
            around the world, pioneering and realizing the world's leading
            SocialFi platform.
          </p>
        </div>

        <img src={img} alt={img} />
      </div>

      <div className="ecosystem_available_on">
        <h2>Available On</h2>
        <p>
          Dive into a fully crypto-focused, socially gamified atmosphere and
          unite with our lovely community from all around.
        </p>
      </div>

      <div className="diagrams">
        <img src={img2} alt={img2} />
        <img src={img3} alt={img3} />
      </div>

      <div className="ecosystem_traded_on">
        <h2>Traded On</h2>
        <p>
          Dive into a fully crypto-focused, socially gamified atmosphere and
          unite with our lovely community from all around.
        </p>
        <Cryptos className="cryptos" />
      </div>
    </div>
  );
};

export default EcosystemSection;
