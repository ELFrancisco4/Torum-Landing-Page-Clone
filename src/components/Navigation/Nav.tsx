import "./styles.scss";
import logo from '../../assets/images/torum.jpg'
const Nav = () => {
  return (
    <nav className="nav">
      <div><img src={logo} alt="Torum Logo" /> <h2>Torum</h2></div>
      
      <ul>
        <li>
          {" "}
          <a href="#">PORTALS</a>{" "}
        </li>
        <li>
          <a href="#"> OVERVIEW</a>
        </li>
        <li>
          {" "}
          <a href="#">APP</a>
        </li>
        <li>
          <a href="#">INVESTORS</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">MEET OUR TEAM</a>{" "}
        </li>
      </ul>

      <button className="button">GET STARTED</button>
    </nav>
  );
};

export default Nav;
