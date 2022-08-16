import styled from "styled-components";

export const NotFoundContainer = styled.section`
  background-color: white;
  padding: 8em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  gap: 5em;

  .imageBadWay {
    background-image: url("/images/coffee.png");
    background-size: cover;
    background-position: 100%;
    border-radius: 50%;
    width: 400px;
    height: 300px;
    border-radius: 15px;
  }
  .badWayContainer {
    max-width: 600px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column wrap;
    gap: 1em;
    padding: 10px;
    color: #50270e;
  }
  .badWayContainer h1 {
    font-size: 2em;
    letter-spacing: 2px;
  }
  .badWayContainer p {
    font-size: 1em;
  }
  .badWayContainer button {
    padding: 12px;
    border: none;
    border-radius: 15px;
    background-color: #50270e;
    color: #f1f1f1;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s linear;
  }

  .badWayContainer button:hover {
    background-color: #7c3b12;
  }
`;
