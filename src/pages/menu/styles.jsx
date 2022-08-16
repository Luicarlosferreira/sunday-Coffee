import styled from "styled-components";

export const MenuContainer = styled.nav`
  background-color: #1c0a00;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  gap: 5em;
  padding: 10em 0;
  .information_Menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    text-align: center;
    padding: 15px;
    gap: 20px;
  }
  .Container_Menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
    max-width: 80%;
    gap: 1em;
  }

  @media (max-width: 600px) {
    .Container_Menu {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: wrap;
      max-width: 93%;
      gap: 1em;
    }
  }
`;
