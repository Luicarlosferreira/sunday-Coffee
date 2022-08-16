import { Container } from "./styles";
import { Logo } from "../logo/index";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";
import { useState } from "react";

export const Header = () => {
  const [active, setMenuMobile] = useState(false);
  const ToggleMode = () => setMenuMobile(!active);
  const ToggleFalse = () => setMenuMobile(false);

  return (
    <Container>
      <NavLink to="/" onClick={ToggleFalse}>
        <Logo />
      </NavLink>
      {!active ? (
        <ul>
          <NavLink to="/" onClick={ToggleFalse}>
            Home
          </NavLink>
          <NavLink to="/menu" onClick={ToggleFalse}>
            Menu
          </NavLink>
          <NavLink to="/about" onClick={ToggleFalse}>
            About us
          </NavLink>
          <NavLink to="/contact" onClick={ToggleFalse}>
            Contact
          </NavLink>
        </ul>
      ) : (
        <ul className="ul_open">
          <NavLink to="/" onClick={ToggleFalse}>
            Home
          </NavLink>
          <NavLink to="/menu" onClick={ToggleFalse}>
            Menu
          </NavLink>
          <NavLink to="/about" onClick={ToggleFalse}>
            About us
          </NavLink>
          <NavLink to="/contact" onClick={ToggleFalse}>
            Contact
          </NavLink>
        </ul>
      )}
      {active ? (
        <RiCloseFill
          className={!active ? " mobileCloseMenu" : "mobileMenu"}
          onClick={ToggleMode}
        />
      ) : (
        <RiMenu3Line
          className={!active ? "mobileMenu" : "mobileCloseMenu"}
          onClick={ToggleMode}
        />
      )}
      {active && <div className="modalMobile" onClick={ToggleFalse}></div>}
    </Container>
  );
};
