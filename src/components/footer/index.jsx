import { FooterContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="LogoContainer">
        <img src="/icons/logoIcon.png" alt="Logo coffee store" />
        <h2>SundayCoffee</h2>
      </div>
      <div className="ListFooterContainer">
        <ul>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/map">Find Us</NavLink>
        </ul>
      </div>
      <div className="finalFooter">
        <div className="SocialContainer">
          <NavLink to="/">
            <FaInstagram />
          </NavLink>
          <NavLink to="/">
            <FaFacebookSquare />
          </NavLink>
        </div>
        <p>
          Web Site Developed by <span>Luis Carlos Ferreira Carneiro</span>{" "}
        </p>
      </div>
    </FooterContainer>
  );
};
