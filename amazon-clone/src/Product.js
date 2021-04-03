import React from "react";
import styled from "styled-components";

export default function Product() {
  return (
    <Container>
      <Title>New Apple iPhone 11 (64GB) - Black</Title>
      <Price>$1213</Price>
      <Rating>*****</Rating>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"/>
     <ActionSection>
      <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height:400px;
  display:flex;
  flex-direction:column;
`;
const Price = styled.span`
font-weight: 500;
margin-top:3px;
`;
const Title = styled.span``;
const Rating = styled.div``;
const Image = styled.img`
max-height:200px;
object-fit:contain;
`;
const AddToCartButton = styled.button`
width:100px;
height:30px;
background-color:#f0c14b;
border:2px solid #a88734;
border-radius:2px;
`;
const ActionSection = styled.div`
display:grid;
place-items: center;
`;

