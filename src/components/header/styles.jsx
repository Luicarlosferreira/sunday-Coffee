import styled from "styled-components";

export const Container = styled.header`
  background-color: #fff;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6em;
  position: fixed;
  width: 100%;
  z-index: 12;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3em;
    padding: 0 20px;
  }
  ul a {
    color: #50270e;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.2s linear;
    padding: 4px 0;
  }
  ul a:hover {
    cursor: pointer;
    border-bottom: 2px solid #50270e;
  }

  svg {
    display: none;
    width: 30px;
    height: 30px;
    color: #50270e;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    background-color: #fff;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6em;
    .modalMobile {
      position: absolute;
      margin: 0;
      left: 0;
      width: 100%;
      height: 193vh;
      background-color: #141312c3;
      z-index: 7;
    }
    .mobileMenu {
      display: block;
      z-index: 10;
    }

    .mobileCloseMenu {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }

    ul {
      background-image: url("/public/images/coffee.png");
      background-size: 50%;
      background-repeat: repeat-x;
      background-position: 50% 80%;
      position: absolute;
      background-color: #fff;
      width: 75px;
      height: 100vh;
      display: flex;
      flex-flow: column wrap;
      top: 0;
      right: -100px;
      gap: 2em;
      padding: 0;
      transition: all 0.2s linear;
      opacity: 0;
      z-index: 9;
    }

    .ul_open {
      background-image: url("/public/images/coffee.png");
      background-size: 50%;
      background-repeat: repeat-x;
      background-position: 50% 80%;
      position: absolute;
      background-color: #fff;
      width: 400px;
      height: 100vh;
      display: flex;
      flex-flow: column wrap;
      top: 0;
      right: 0;
      gap: 2em;
      padding: 0;
      opacity: 1;
      z-index: 9;
    }
  }

  @media (max-width: 550px) {
    background-color: #fff;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6em;

    .ul_open {
      background-image: url("/public/images/coffee.png");
      background-size: 50%;
      background-repeat: repeat-x;
      background-position: 50% 80%;
      position: absolute;
      background-color: #fff;
      width: 300px;
      height: 100vh;
      display: flex;
      flex-flow: column wrap;
      top: 0;
      right: 0;
      gap: 2em;
      padding: 0;
      opacity: 1;
    }
  }

  @media (max-width: 450px) {
    background-color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3em;

    .ul_open {
      background-image: url("/public/images/coffee.png");
      background-size: 50%;
      background-repeat: repeat-x;
      background-position: 50% 80%;
      position: absolute;
      background-color: #fff;
      width: 300px;
      height: 100vh;
      display: flex;
      flex-flow: column wrap;
      top: 0;
      right: 0;
      gap: 2em;
      padding: 0;
      opacity: 1;
    }
  }
  @media (max-width: 330px) {
    background-color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2em;

    .ul_open {
      background-image: url("/public/images/coffee.png");
      background-size: 50%;
      background-repeat: repeat-x;
      background-position: 50% 80%;
      position: absolute;
      background-color: #fff;
      width: 220px;
      height: 100vh;
      display: flex;
      flex-flow: column wrap;
      top: 0;
      right: 0;
      gap: 2em;
      padding: 0;
      opacity: 1;
    }
  }
`;
