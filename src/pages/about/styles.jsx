import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 15em 0;
  max-width: 90%;
  margin: auto;
  .AcordionContent {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 1em;
  }

  .aboutUs {
    text-align: center;
  }

  @media (max-width: 850px) {
    max-width: 95%;
    margin: auto;
  }
`;
