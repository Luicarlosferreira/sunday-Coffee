import { AboutContainer } from "./styles";
import { AccordionsAbout } from "../../components/accordionAbout/index";

export const About = () => {
  return (
    <AboutContainer>
      <div className="AcordionContent">
        <div className="aboutUs">
          <h1>ABOUT US</h1>
        </div>
        <AccordionsAbout />
      </div>
    </AboutContainer>
  );
};
