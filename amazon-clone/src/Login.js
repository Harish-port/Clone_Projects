import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <Content>
      <AmazonLogo src="
      http://pngimg.com/uploads/amazon/amazon_PNG24.png
      "/>
        <h1>Sign into Amazon</h1>
        <LoginButton>Sign in with Google</LoginButton>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  backgroud-color: #f8f8f8;
  display: grid;
  place-items: center;
`;
const Content = styled.div``;
const AmazonLogo = styled.img`
height:100px;
`;
const LoginButton = styled.button``;
