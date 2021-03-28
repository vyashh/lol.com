import "./menu.styles.scss";
import Logo from "../../assets/img/logo.svg";
import CartIcon from "../../assets/img/cart.svg";
import FavoritesIcon from "../../assets/img/favorites.svg";
import { useHistory } from "react-router-dom";

export default function Menu() {
  const history = useHistory();

  return (
    <div className="menu">
      <div className="menu__actions">
        <img
          className="menu__actions--logo clickable"
          src={Logo}
          alt="lol.com logo"
          onClick={() => history.push("/")}
        />
        <input
          className="menu__actions--search"
          type="search"
          name="search"
          placeholder="Waar ben je naar op zoek?"
        />
        <div className="menu__actions__account">
          <p
            className="menu__actions__account--login clickable"
            onClick={() => history.push("/login")}
          >
            Inloggen
          </p>

          <img
            className="menu__actions__account--favorites menu-icon"
            src={FavoritesIcon}
            alt="favorites"
          />
          <img
            className="menu__actions__account--cart menu-icon"
            src={CartIcon}
            alt="cart"
          />
        </div>
      </div>
    </div>
  );
}
