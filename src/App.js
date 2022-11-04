import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Form from "./components/Form";
import backgroundImg from "./images/bg-intro-desktop.png";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImg});
  background-color: hsl(0, 100%, 74%);
  padding: 0 9.5rem;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  max-width: 600px;
  width: 100%;
`;

const Header = styled.h1`
  color: white;
  align-self: flex-start;
  font-size: 3rem;
  line-height: 3.5rem;
  margin-bottom: 1.7rem;
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
