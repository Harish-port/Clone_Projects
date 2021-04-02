import React from "react";
import styled from "styled-components";

export default function Product() {
  return (
    <Container>
      <Title>IPad Pro</Title>
      <Price>$1213</Price>
      <Rating></Rating>
      <Image />
      <AddToCartButton>Add to Cart</AddToCartButton>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  z-index: 100;
  width: 300px;
  height: 300px;
  flex: 1;
  padding: 20px;
  margin: 10px;
`;
const Price = styled.span``;
const Title = styled.span``;
const Rating = styled.div``;
const Image = styled.img``;
const AddToCartButton = styled.button``;
