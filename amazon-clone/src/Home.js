import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Banner></Banner>
      <Content>lorem20dad</Content>
    </Container>
  );
}

const Container = styled.div`
max-width:1500px;
`;
const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
background:white;

`;
