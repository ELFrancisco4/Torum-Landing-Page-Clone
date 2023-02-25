import logo from "../../assets/images/torum.jpg";
import Contact from "../Contact/Contact";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <Contact />

      <div className="footer">
        <div className="footer_section_1">
          <div>
            <img src={logo} alt={logo} /> <h2>TORUM</h2>
          </div>
          <p>
            Torum NFT MarketPlace and Torum Finance succeed as complementary
            additions to connect crypto projects and users
          </p>
          <span>Torum Technology Sdn. Bnd. 2020 - 2023 </span>
        </div>

        <div className="footer_section_2">
          <div>
            <ul>
              <li>
                <strong>Company</strong>
              </li>
              <li>About Us</li>
              <li>Blog </li>
              <li>Careers</li>
            </ul>
            <ul>
              <li>
                <strong>Products</strong>
              </li>
              <li>Account & Card</li>
              <li>Security</li>
              <li>Crypto</li>
            </ul>
            <ul>
              <li>
                <strong>Help</strong>
              </li>
              <li>Support and guides</li>
              <li>Developer docs</li>
              <li>Status</li>
            </ul>
          </div>

          <span>Torum Technology Sdn. Bnd. 2020 - 2023 </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
