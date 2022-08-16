import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  gap: 5px;
  color: #361500;
  cursor: pointer;

  img {
    max-width: 35px;
  }
  span {
    letter-spacing: 2px;
    color: #50270e;
  }

  @media (max-width: 550px) {
    font-size: 1.5em;
  }

  @media (max-width: 450px) {
    font-size: 1.2em;

    img {
      max-width: 30px;
    }
  }

  @media (max-width: 330px) {
    font-size: 1em;

    img {
      max-width: 25px;
    }
  }
`;
