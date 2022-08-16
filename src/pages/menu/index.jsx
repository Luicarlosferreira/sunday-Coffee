import { MenuContainer } from "./styles";
import { MenuCard } from "../../components/menuCard/index";
import { products } from "./../../data/products.json";
import { Fade, Slide } from "react-awesome-reveal";
export const Menu = () => {
  return (
    <Fade>
      <MenuContainer>
        <div className="information_Menu">
          <h2>The best you can choose here!</h2>
          <p>Just make your choice and be happy with SundayCoffee</p>
        </div>
        <div className="Container_Menu">
          {products.map((item) => {
            return (
              <Slide duration={1800} triggerOnce="true">
                <MenuCard
                  key={item.id}
                  alt="Sunday Coffee special"
                  image={item.images}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  buy="Buy It"
                />
              </Slide>
            );
          })}
        </div>
      </MenuContainer>
    </Fade>
  );
};
