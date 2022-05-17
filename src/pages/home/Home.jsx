import React from "react";
import { Container } from "../../styles/container/Container_styled";
import ReactTypingEffect from "react-typing-effect";
import HomeBox from "../../components/home/HomeBox";
import { AiOutlineStar } from "react-icons/ai";
import {
  VscNewFile,
  VscFolderOpened,
  VscSourceControl,
  VscMortarBoard,
  VscFilePdf,
} from "react-icons/vsc";
import {
  Title,
  HomeSection,
  Subtitle,
  Typing,
} from "../../styles/home/Home_Styled";

function Home() {
  return (
    <Container>
      <Title>Welcome</Title>
      <HomeSection>
        <div>
          <Subtitle>Vscode Portfolio</Subtitle>
          <Typing>
            <ReactTypingEffect
              text={["My name is Noppawat", "I am Frontend Developer"]}
              speed={80}
              eraseDelay={1200}
              eraseSpeed={50}
              typingDelay={800}
            />
          </Typing>
          <span>
            <VscNewFile /> New File...
          </span>
          <span>
            <VscFolderOpened /> Open...
          </span>
          <span>
            <VscSourceControl /> Clone Git Repository...
          </span>
        </div>
        <div>
          <HomeBox
            title="Get Started with VS Portfolio"
            text="Discover the best customizations to make VS Code yours."
            Icon={AiOutlineStar}
          />
          <HomeBox
            title="Learn fundametals"
            text="Jump right in VS Code and get an overview of the must-have features."
            Icon={AiOutlineStar}
          />
          <HomeBox
            title="Boost yout Productivity"
            Icon={VscMortarBoard}
            color
          />
        </div>
      </HomeSection>
    </Container>
  );
}

export default Home;
