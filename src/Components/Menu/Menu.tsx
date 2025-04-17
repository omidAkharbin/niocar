import {XMarkIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import "./Menu.css";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({isOpen, onClose}: MenuProps) => {
  return (
    <div
      className={`menu-overlay ${isOpen ? "open" : ""}`}
      style={{display: isOpen ? "flex" : "none"}}
    >
      <div className="menu-content">
        <button className="close-button" onClick={onClose}>
          <XMarkIcon className="close-icon" />
        </button>
        <nav className="menu-links">
          <Link to="/" onClick={onClose}>
            Home
          </Link>
          <Link to="/features" onClick={onClose}>
            Features
          </Link>
          <Link to="/about" onClick={onClose}>
            About
          </Link>
          <Link to="/contact" onClick={onClose}>
            Contact
          </Link>
        </nav>
        <div className="menu-footer">
          <p>© 2025 NIO EC6</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
