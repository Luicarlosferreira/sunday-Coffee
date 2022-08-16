import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-flow: column wrap;
  color: #50270e;
  padding: 2em;
  span {
    color: #7c4828;
    border-bottom: 1px dotted #50270e;
  }
  .LogoContainer {
    position: relative;
    top: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    background-color: #572a0f;
    padding: 20px;
    width: 100%;
    color: white;
    border-radius: 5px;
  }
  .LogoContainer img {
    max-width: 35px;
    background-color: white;
    border-radius: 40%;
    padding: 4px;
  }
  a {
    color: #50270e;
  }
  .ListFooterContainer ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .ListFooterContainer ul a {
    padding: 10px;
    border-bottom: 1px solid transparent;
    transition: all 0.2s linear;
  }
  .ListFooterContainer ul a:hover {
    border-bottom: 1px solid #7c4828;
  }
  .finalFooter {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    width: 100%;
    gap: 10px;
    text-align: center;
  }
  .SocialContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .SocialContainer svg {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    transition: all 0.2s linear;
  }
  .SocialContainer svg:hover {
    color: #7c4828;
  }

  @media (max-width: 450px) {
    padding: 1em;
    .ListFooterContainer ul {
      gap: 10px;
    }
    .ListFooterContainer ul a {
      padding: 5px;
    }
  }

  @media (max-width: 350px) {
    padding: 1em;
    .ListFooterContainer ul {
      gap: 10px;
      font-size: 13px;
    }
    .ListFooterContainer ul a {
      padding: 5px;
    }

    .finalFooter p {
      font-size: 10px;
    }
  }
`;
