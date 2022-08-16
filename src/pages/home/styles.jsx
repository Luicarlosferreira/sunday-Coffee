import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  color: white;

  .Container_one {
    background-image: url("/images/containerImageOne.jpg");
    background-size: cover;
    background-position: 50% 30%;
    background-repeat: no-repeat;
    filter: saturate(1.3);
    height: 90vh;
    display: flex;
    align-items: center;
  }
  .Container_one div {
    margin-left: 10px;
    left: 3em;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column wrap;
    gap: 5px;
  }
  .Container_one div h1 {
    font-size: 3em;
  }
  .Container_one div h3 {
    font-size: 2em;
  }
  .Container_one div p {
    font-size: 1.5em;
  }
  .Container_one button {
    padding: 12px;
    border: none;
    border-radius: 15px;
    background-color: white;
    color: #50270e;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  .Container_one button:hover {
    background-color: #50270e;
    color: white;
  }
  .Container_two {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    background-color: white;
    color: #50270e;
    gap: 10px;
    padding: 3em 0;
  }
  .Container_two p {
    background-color: #50270e;
    color: white;
    border: 1px solid #50270e;
    padding: 4px;
    border-radius: 3px;
  }
  .Container_two img {
    max-width: 200px;
    border-radius: 50%;
  }
  .Container_three {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10em 0;
    gap: 10em;
  }
  .box_info {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column wrap;
    gap: 25px;
    max-width: 500px;
  }
  .box_info h3 {
    letter-spacing: 3px;
  }
  .box_info div {
    display: flex;
    flex-flow: column wrap;
    gap: 5px;
    font-family: serif;
  }
  .box_info div h1 {
    font-size: 4em;
  }

  .box_info div p {
    font-size: 1.2em;
  }
  .box_info button {
    padding: 12px;
    border: none;
    border-radius: 15px;
    background-color: white;
    color: #50270e;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  .box_info button:hover {
    background-color: #75360e;
    color: white;
  }
  .image_template {
    background-image: url("/images/templateCoffee.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #50270e;
    padding: 1em;
  }
  .image_template img {
    max-width: 300px;
    max-height: 400px;
  }

  .Container_four {
    padding: 14em 0;
    background-color: #f1f1f1;
    color: #50270e;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 5em;
  }
  .info_share_coffee {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 15px;
  }
  .info_share_coffee h1 {
    font-size: 3em;
  }
  .box_share_coffee {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
    max-width: 80%;
    gap: 20px;
  }

  @media (max-width: 1150px) {
    .Container_two {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      background-color: white;
      color: #50270e;
      gap: 10px;
      padding: 4em;
      text-align: center;
    }
    .Container_two p {
      background-color: #50270e;
      color: white;
      border: 1px solid #50270e;
      padding: 4px;
      border-radius: 3px;
    }
    .Container_two img {
      max-width: 200px;
      border-radius: 50%;
    }

    .Container_three {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      padding: 10em 0;
      gap: 4em;
    }

    .box_info {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-flow: column wrap;
      gap: 20px;
      max-width: 500px;
    }
    .box_info h3 {
      letter-spacing: 3px;
    }
    .box_info div {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-family: serif;
    }
    .box_info div h1 {
      font-size: 3em;
    }

    .box_info div p {
      font-size: 1em;
    }
    .box_info button {
      padding: 12px;
      border: none;
      border-radius: 15px;
      background-color: white;
      color: #50270e;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s linear;
    }
    .box_info button:hover {
      background-color: #75360e;
      color: white;
    }
    .image_template {
      background-image: url("/images/templateCoffee.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #50270e;
      padding: 1em;
    }
    .image_template img {
      max-width: 350px;
      max-height: 400px;
    }

    .Container_four {
      padding: 14em 0;
      background-color: #f1f1f1;
      color: #50270e;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 5em;
    }
    .info_share_coffee {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
      text-align: center;
    }
    .info_share_coffee h1 {
      font-size: 3em;
    }
    .box_share_coffee {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: wrap;
      max-width: 80%;
      gap: 20px;
    }
  }

  @media (max-width: 710px) {
    .Container_one {
      background-image: url("/images/containerImageOne.jpg");
      background-size: cover;
      background-position: 95%;
      background-repeat: no-repeat;
      height: 90vh;
      display: flex;
      filter: saturate(1.1);
      align-items: center;
      justify-content: center;
    }
    .Container_one div {
      margin-left: 0;
    }
    .div_one {
      background-color: #773d186c;
      border-radius: 5px;
      margin-left: 0px;
      height: 90vh;
      left: 0;
      padding: 4em 1em;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-flow: column wrap;
      gap: 5px;
      margin: auto;
    }
    .Container_one div h1 {
      font-size: 2em;
    }
    .Container_one div h3 {
      font-size: 1.5em;
    }
    .Container_one div p {
      font-size: 1.2em;
    }
  }

  @media (max-width: 600px) {
    .box_info {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-flow: column wrap;
      gap: 20px;
      max-width: 500px;
      padding: 15px;
    }
    .box_info h3 {
      letter-spacing: 3px;
    }
    .box_info div {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-family: serif;
    }
    .box_info div h1 {
      font-size: 2em;
    }

    .box_info div p {
      font-size: 1em;
      letter-spacing: 1px;
    }

    .image_template {
      background-image: url("/images/templateCoffee.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #50270e;
      padding: 0;
    }
    .image_template img {
      max-width: 300px;
      max-height: 400px;
    }

    .Container_four {
      padding: 14em 0;
      background-color: #f1f1f1;
      color: #50270e;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 5em;
    }
    .info_share_coffee {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column wrap;
      gap: 15px;
    }
    .info_share_coffee h1 {
      font-size: 2em;
    }
    .box_share_coffee {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: wrap;
      max-width: 80%;
      gap: 20px;
    }
  }

  @media (max-width: 415px) {
    .Container_one {
      background-image: url("/images/containerImageOne.jpg");
      background-size: cover;
      background-position: 89%;
      background-repeat: no-repeat;
      height: 90vh;
      display: flex;
      filter: saturate(1.1);
      align-items: center;
      justify-content: center;
    }
    .Container_one div h1 {
      font-size: 1.5em;
    }
    .Container_one div h3 {
      font-size: 1em;
    }
    .Container_one div p {
      font-size: 0.8em;
    }
  }
`;
