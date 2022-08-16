import styled from "styled-components";

export const ContainerCard = styled.div`
  padding: 1px;
  border-radius: 5px;
  background-color: #96400b;

  .Card {
    transition: all 0.2s linear;
    max-height: 350px;
  }

  .buttonPrice,
  .buttonBuy {
    color: #96400b;
    font-weight: 600;
  }

  .buttonPrice:hover,
  .buttonBuy:hover {
    background-color: #96400b;
    color: white;
  }
`;
