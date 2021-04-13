import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

export default function CartTotal({getTotalPrice,getCount}) {
  
  return (
    <Container>
      <SubTotal>Subtotal({getCount()} items): 
      <NumberFormat value={getTotalPrice()} displayType={'text'} thousandsGroupStyle="lakh" thousandSeparator={true} prefix={'₹'} />
      </SubTotal>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </Container>
  );
}
const Container = styled.div`
  flex: 0.2;
  padding: 20px;
  background-color: white;
`;
const SubTotal = styled.h2`
margin-bottom:16px;
`;
const CheckoutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  //vertical - horizontal
  padding: 4px 8px;
  border: 2px solid #a88734;
  cursor: pointer;
  font-size: 16px;
  :hover{
      background-color: #ddb347;
  }
`;
