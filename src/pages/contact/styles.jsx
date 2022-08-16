import styled from "styled-components";

export const ContainerContact = styled.section`
  .imageContainerContact {
    height: 100vh;
    background-image: url("public/images/opened-craft-paper-envelope-autumn-leaves-coffee-wooden-table.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: wrap;
    padding: 0 4em;
    max-width: 100%;
  }
  .imageContainerContact h2 {
    font-size: 4em;
    background-color: #743610dc;
    padding: 10px;
    border-radius: 15px;
    letter-spacing: 4px;
  }

  .contactContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
    padding: 15em 0;
    gap: 10px;
    background-color: white;
  }
  .contactContainer div {
    max-width: 450px;
    background-color: #50270e;
    border-radius: 5px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  .contactContainer div:hover {
    background-color: #1c0a00;
    transform: scale(0.9);
  }
  .contactContainer div svg {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 600px) {
    .imageContainerContact h2 {
      font-size: 2em;
      background-color: #743610dc;
      padding: 10px;
      border-radius: 15px;
      letter-spacing: 4px;
    }
    @media (max-width: 400px) {
      .imageContainerContact h2 {
        font-size: 1.5em;
        background-color: #743610dc;
        padding: 10px;
        border-radius: 15px;
        letter-spacing: 4px;
      }
    }
  }
`;
