import "../styles/Header.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import Button from "./Button";
const Header = () => {
  return (
    <div className="header">
      <div className="header__links">
        <li className="active">
          Products
          <ExpandMoreIcon style={{ marginLeft: "0.4rem", color: "black" }} />
        </li>
        <li>Collections</li>
        <li>Gifts</li>
        <li>Our magazine</li>
      </div>
      <div className="header__register">
        <SearchIcon />
        <li>Log In</li>
        <Button
          border="none"
          background="linear-gradient(to right, #fc787f, #ff8664)"
          text="sign up"
          color="#fff"
        />
      </div>
    </div>
  );
};

export default Header;
