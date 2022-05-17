import React from "react";
import { useAppContext } from "../../context/Context";
import { Container } from "../../styles/container/Container_styled";
import { Tag } from "../../styles/about/About_styled";
import { Comment } from "../../styles/experiences/Experiences_styled";
import {
  Title,
  Subtitle,
  Ul,
  Property,
} from "../../styles/projects/Projects_styled";

function Projects() {
  const { data } = useAppContext();

  return (
    <Container>
      <Tag>
        {`<`}
        <span>script</span>
        {`>`}
      </Tag>
      <Title>My Projects</Title>
      <Comment>{`/* - - - - - - - - - - all project ${data.projects?.length} - - - - - - - - - - */`}</Comment>
      <Subtitle>
        <span>const</span>
        <span> Projects </span>
        <span>=</span> [
      </Subtitle>
      <Ul>
        {data.projects?.map((project, idx) => {
          const { displayName, githubUrl, url, languages } = project;
          return (
            <li key={idx}>
              <Tag>{`{`}</Tag>
              <Property>
                Project Name: <span>"{displayName}",</span>
              </Property>
              <Property>
                Source Code:{" "}
                <a href={githubUrl} target="_blank">
                  github,
                </a>
              </Property>
              <Property>
                Languages: <span>"{languages.join(" | ")}",</span>
              </Property>
              <Property>
                Website:{" "}
                <a href={url} target="_blank">
                  url,
                </a>
              </Property>
              <Tag>{`},`}</Tag>
            </li>
          );
        })}
      </Ul>
      <Subtitle>]</Subtitle>
      <Tag>
        {`</`}
        <span>script</span>
        {`>`}
      </Tag>
    </Container>
  );
}

export default Projects;
