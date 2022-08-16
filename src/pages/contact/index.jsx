import { ContainerContact } from "./styles";
import { BsChatRightDots } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

export const Contact = () => {
  return (
    <Fade triggerOnce={true} duration={2000}>
      <ContainerContact>
        <div className="imageContainerContact">
          <h2>Contact Us</h2>
        </div>
        <div className="contactContainer">
          <div>
            <BsChatRightDots />
            <h2>Chat Now</h2>
          </div>
          <div>
            <SiMinutemailer />
            <h2>Send Email</h2>
          </div>
          <div>
            <AiOutlineMail />
            <h2>Call Us Now</h2>
          </div>
        </div>
      </ContainerContact>
    </Fade>
  );
};
