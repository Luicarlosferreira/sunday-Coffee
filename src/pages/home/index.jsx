import { HomeContainer } from "./styles";
import ActionAreaCard from "../../components/actionCard/index";
import { NavLink } from "react-router-dom";
import { Slide, Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <HomeContainer>
      <Fade duration={2000}>
        <div className="Container_one">
          <Fade duration={2000} triggerOnce={true}>
            <div className="div_one">
              <h3>Discover the best flavor</h3>
              <h1>Sunday Coffee to serve you</h1>
              <p>
                You are just a few steps away from tasting the best coffee in
                the world.
              </p>
              <NavLink to="/menu">
                <button>Explore Now</button>
              </NavLink>
            </div>
          </Fade>
        </div>
      </Fade>
      <Fade>
        <div className="Container_two">
          <Slide duration={1500} triggerOnce={true}>
            <h2>Sunday Coffee. The best way to start the day.</h2>
            <p>
              You can choose any of our coffee models. But we won't be surprised
              if you fall in love with our flavor.
            </p>
          </Slide>
          <Fade duration={2000} triggerOnce={true}>
            <img src="public/images/coffee.png" alt="coffee image" />
          </Fade>
        </div>
      </Fade>
      <div className="Container_three">
        <Fade>
          <div className="box_info">
            <h3>About Sunday Coffee</h3>
            <div>
              <h1>Our best service</h1>
              <p>
                You can't find the best product anywhere. But for sure, anywhere
                you will find us. We specialize in being present in people's
                lives and bringing them flavor on any day.
              </p>
            </div>
            <NavLink to="/about">
              <button>Read About Us</button>
            </NavLink>
          </div>
          <div className="image_template">
            <img src="public/images/sundayCoffee.png" alt="Sunday Coffee" />
          </div>
        </Fade>
      </div>

      <div className="Container_four">
        <div className="info_share_coffee">
          <h3>Could you please share our best flavor?</h3>
          <h1>Show us the taste of Sunday coffee cup</h1>
        </div>
        <div className="box_share_coffee">
          <Fade>
            <ActionAreaCard
              title="My best day"
              text="This is my best shot about my coup of SUNDAY COFFEE."
              image="public/shareImages/1.jpg"
              alt="Coffe image pic day"
            />
            <ActionAreaCard
              title="Sunday Coffee is my love ♥"
              text="Today the day started well with the best coffee in the world. Thanks, Sunday coffee."
              image="public/shareImages/2.jpg"
              alt="Coffe image pic day"
            />
            <ActionAreaCard
              title="I wish coffee"
              text="Thank you for providing the best coffee ever. Love you!"
              image="public/shareImages/3.jpg"
              alt="Coffe image pic day"
            />
            <ActionAreaCard
              title="Wake up and Sunday Coffee"
              text="Drinking sunday coffee is like being in paradise. I love it ♥"
              image="public/shareImages/4.jpg"
              alt="Coffe image pic day"
            />
            <ActionAreaCard
              title="Best Regards"
              text="Thank you for gifting me with the best coffee, which brings out the best taste."
              image="public/shareImages/5.jpg"
              alt="Coffe image pic day"
            />
            <ActionAreaCard
              title="Sunday coffee is every day."
              text="I wake up and already drink my sunday coffee to improve my day."
              image="public/shareImages/6.jpg"
              alt="Coffe image pic day"
            />
          </Fade>
        </div>
      </div>
    </HomeContainer>
  );
};
