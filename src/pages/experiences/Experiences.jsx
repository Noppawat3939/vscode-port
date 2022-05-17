import React from "react";
import { useAppContext } from "../../context/Context";
import { Container } from "../../styles/container/Container_styled";
import { Tag } from "../../styles/about/About_styled";
import {
  Title,
  Ul,
  Position,
  Name,
  Job,
  Project,
  Comment,
} from "../../styles/experiences/Experiences_styled";

function Experiences() {
  const { data } = useAppContext();

  return (
    <Container>
      <Title>
        <Tag>
          <span>*</span>
          {`{`}
          <p>page</p>
        </Tag>
        : Experiences;
        <Tag>{`}`}</Tag>
      </Title>
      {data.work?.map((item, idx) => {
        const { name, position, highlights, start, end, url } = item;
        return (
          <Ul key={idx}>
            <li>
              <Position>
                <Tag>
                  <span>h3</span>
                  {`{`}
                  <p>position</p>
                </Tag>
                : {position};<Tag>{`}`}</Tag>
              </Position>
              <Comment>
                {`/* start job from: `}
                {start?.month}/{start?.year} to {end?.month}/{end?.year}
                {` */`}
              </Comment>
            </li>
            <li>
              <Name>
                <Tag>
                  <span>h4</span>
                  {`{`}
                  <p>company</p>
                </Tag>
                : {name};<Tag>{`}`}</Tag>
              </Name>
            </li>
            <li>
              {highlights.map((job, id) => (
                <Job key={id}>
                  <Tag>
                    <span>p</span>
                    {`{`}
                    <p>task {id + 1}:</p>
                  </Tag>
                  <span>{job};</span>
                  <Tag>{`}`}</Tag>
                </Job>
              ))}
            </li>
            <li>
              <Project>
                <Tag>
                  <span>a</span>
                  {`{`}
                  <p>project</p>
                  <a href={url}>: view;</a>
                </Tag>
                <Tag>{`}`}</Tag>
              </Project>
            </li>
          </Ul>
        );
      })}
    </Container>
  );
}

export default Experiences;
