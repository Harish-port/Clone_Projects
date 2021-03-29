import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
export default function Header() {
  return (
    <Container>
      <HeaderLogo>
        <img
          src={
            "https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
          }
          alt="amazon-logo"
        />
      </HeaderLogo>
      <HeaderOptionAddress>
        <OptionLineOne>Hello</OptionLineOne>
        <OptionLineOne>Select Your Address</OptionLineOne>
      </HeaderOptionAddress>
      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  color: white;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;
const HeaderOptionAddress = styled.div``;
const OptionLineOne = styled.div``;
const HeaderSearch = styled.div`
display:flex;
`;
const HeaderSearchInput = styled.input``;
const HeaderSearchIconContainer = styled.div``;
