import React from "react";
import { useAppContext } from "../../context/Context";
import { Tag } from "../../styles/about/About_styled";
import { Container } from "../../styles/container/Container_styled";
import ChangeTheme from "./ChangeTheme";
import { Comment } from "../../styles/experiences/Experiences_styled";
import { Title, Subtitle, Content } from "../../styles/themes/Theme_styled";

function Theme() {
  const { dispatch } = useAppContext();

  return (
    <Container>
      <Title>
        <Tag>
          <span>import</span>
        </Tag>
        My Themes
        <Tag>
          <span>from</span>
          <p>
            <span>"vscode"</span>
          </p>
          ;
        </Tag>
      </Title>
      <Subtitle>
        <span>import</span> React <span>from</span> <p>"react"</p>;
      </Subtitle>
      <Subtitle>
        <span>import</span> Theme <span>from</span> <p>"./theme"</p>;
      </Subtitle>
      <Content>
        <h4>
          <span>function</span>ChangeTheme<span>{`()`}</span>
          <Tag>{`{`}</Tag>
        </h4>
        <Comment>/* you can click 'clickHere' for change theme */</Comment>
        <h5>
          <span>const</span> Click = <span>{`()`}</span> {`=>`}
          <Tag>
            <p>{`{`}</p>
          </Tag>
        </h5>
        <ChangeTheme
          onclick={() => dispatch({ type: "VSCODE" })}
          title="vscode"
        />
        <ChangeTheme
          onclick={() => dispatch({ type: "CONTRAST" })}
          title="vscode dark contrast"
        />
        <ChangeTheme
          onclick={() => dispatch({ type: "GITHUB" })}
          title="github"
        />
        <ChangeTheme onclick={() => dispatch({ type: "EVA" })} title="eva" />
        <ChangeTheme
          onclick={() => dispatch({ type: "DARKSOFT" })}
          title="dark soft"
        />
        <ChangeTheme
          onclick={() => dispatch({ type: "KEYCHRON" })}
          title="keychron"
        />
        <ChangeTheme
          onclick={() => dispatch({ type: "LIGHT" })}
          title="soft light"
        />

        <h5>
          <Tag>
            <p>{`}`}</p>
          </Tag>
        </h5>
        <h5>
          return
          <Tag>
            {`<`}
            <span>div</span>
            {`>`}
          </Tag>
          Your Theme
          <Tag>
            {`</`}
            <span>div</span>
            {`>`}
          </Tag>
        </h5>
        <h4>
          <Tag>{`}`}</Tag>
        </h4>
        <h4>
          <span>export default</span>ChangeTheme;
        </h4>
      </Content>
    </Container>
  );
}

export default Theme;
