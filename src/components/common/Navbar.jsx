import { Link } from "react-router-dom";
import "../../styles/nav.css";

function Navbar() {
  return (
    <nav>
      <div className="brand">Ecommerce.</div>

      <div className="nav-items">
        <div className="nav-item">
          <Link to={"/"}>Products</Link>
        </div>
        <div className="nav-item">About</div>
        <div className="nav-item">
          <Link to={"/cart"}>Cart</Link>
        </div>
        <div className="nav-item">
          <Link to={"/profile"}>Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
