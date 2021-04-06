import React from "react";
import styled from "styled-components";

export default function Product({title,price,rating,image,id}) {
  console.log();
  return (
    <Container>
      <Title>{title}</Title>
      <Price>Rs.{price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => (
            <p>&#9733;</p>
          ))}
      </Rating>
      <Image src={image} />
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
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Title = styled.span``;
const Rating = styled.div`
  display: flex;
`;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
`;
const ActionSection = styled.div`
  display: grid;
  place-items: center;
`;
