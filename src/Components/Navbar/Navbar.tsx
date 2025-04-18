import {Link} from "react-router-dom";
import {Bars3BottomLeftIcon, XMarkIcon} from "@heroicons/react/24/outline";
import classes from "./Navbar.module.css";

interface NavbarProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

const Navbar = ({onMenuToggle, menuOpen}: NavbarProps) => {
  return (
    <div className={classes.mynav}>
      {/* Desktop menu - hidden on mobile */}
      <ul className={classes["nav-menu"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className={classes["nav-contact"]}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div
        className={classes["mobile-menu-button"]}
        onClick={onMenuToggle}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <XMarkIcon className={classes.menuIcon} />
        ) : (
          <Bars3BottomLeftIcon className={classes.menuIcon} />
        )}
      </div>

      <Link to="/" className={classes["nav-logo"]}>
        <img src="./src/assets/EC6logo.png" alt="NIO logo" />
      </Link>
    </div>
  );
};

export default Navbar;
