import React from "react";
import { useAppContext } from "../../context/Context";
import { Container } from "../../styles/container/Container_styled";
import {
  Title,
  Subtitle,
  Content,
  Image,
  Tag,
  ImageCon,
  Link,
} from "../../styles/about/About_styled";
import file from "../../file/resume.pdf";

function About() {
  const { data } = useAppContext();

  return (
    <Container>
      <Title>
        <Tag>
          {`<`}
          <span>h1</span>
          {`>`}
        </Tag>{" "}
        About me{" "}
        <Tag>
          {`</`}
          <span>h1</span>
          {`>`}
        </Tag>
      </Title>
      <div>
        <Subtitle>
          <Tag>
            {`<`}
            <span>h3</span>
            {`>`}
          </Tag>
          {data.basics?.name}
          <Tag>
            {`</`}
            <span>h3</span>
            {`>`}
          </Tag>
        </Subtitle>
        <Content>
          <Tag>
            {`<`}
            <span>p</span>
            {`>`}
          </Tag>
          {data.basics?.summary}
          <Tag>
            {`</`}
            <span>p</span>
            {`>`}
          </Tag>
        </Content>
      </div>
      <Image>
        <Tag>
          {`<`}
          <span>img</span>
          <p>src=</p>
          {`{`}
        </Tag>
        <ImageCon>
          <img src={data.basics?.image} />
        </ImageCon>{" "}
        <Tag>
          {`}`}
          <p>
            alt=<span>"Profile"</span>
          </p>
          {`/>`}
        </Tag>
      </Image>
      <Link>
        <Tag>
          {`<`}
          <span>a</span>
          <p>
            href= <span>"download"</span>
          </p>
          {`>`}
        </Tag>
        <a href={file} download>
          Resume
        </a>
        <Tag>
          {`</`}
          <span>a</span>
          {`>`}
        </Tag>
      </Link>
      <Link>
        <Tag>
          {`<`}
          <span>a</span>
          <p>
            href= <span>"github"</span>
          </p>
          {`>`}
        </Tag>
        <a href="https://github.com/Noppawat3939" target="_blank">
          Github
        </a>
        <Tag>
          {`</`}
          <span>a</span>
          {`>`}
        </Tag>
      </Link>
    </Container>
  );
}

export default About;
