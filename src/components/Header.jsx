import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import moon from "../assets/images/moon.png";
import contact from "../assets/images/contact.png";

const Header = () => (
  <header className='header'>
    <Link to={"/"} className='logo'>
      <img src={logo} alt='logo' />
    </Link>
    <div className='header-right'>
      <div className='moon'>
        <img src={moon} alt='moon' />
      </div>
      <div className='search-bar'>
        <input type='search' />
        <div className='icone'></div>
      </div>
      <div className='profil'>
        <Link to={"/login"}>
          <img src={contact} alt='connexion' />
        </Link>
      </div>
    </div>
  </header>
);
export default Header;
