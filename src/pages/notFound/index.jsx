import { NotFoundContainer } from "./styles";
import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <div className="imageBadWay"></div>
      <div className="badWayContainer">
        <h1>Your search for the best coffee went the wrong way.</h1>
        <p>
          Sorry, the page you entered may not exist or is no longer part of our
          site.
        </p>
        <p>Don't worry! Return to the main page and have a coffee ♥</p>
        <NavLink to="/">
          <button>Go to Homepage</button>
        </NavLink>
      </div>
    </NotFoundContainer>
  );
};
