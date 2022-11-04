import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Form from "./components/Form";
import backgroundImg from "./images/bg-intro-desktop.png";

const AppContainer = styled.div`
  display: grid;
  position: relative;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImg});
  background-color: hsl(0, 100%, 74%);
  padding: 0 9.5rem;
  @media only screen and (max-width: 850px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 4rem 1.5rem;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  max-width: 600px;
  width: 100%;
  @media only screen and (max-width: 850px) {
    text-align: center;
  }
`;

const Header = styled.h1`
  color: white;
  align-self: flex-start;
  font-size: 3rem;
  line-height: 3.5rem;
  margin-bottom: 1.7rem;
  @media only screen and (max-width: 850px) {
    align-self: center;
    font-size: 1.8rem;
    line-height: 2.2rem;
    margin-top: 1.7rem;
  }
`;

const Paragraph = styled.p`
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <Column>
        <Header>Learn to code by watching others</Header>

        <Paragraph>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Paragraph>
      </Column>
      <Column>
        <Form />
        <Footer />
      </Column>
    </AppContainer>
  );
}

export default App;
