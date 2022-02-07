import React from "react";
import styled from "styled-components";
import ListSlider from "../ListSlider/ListSlider";

function ProductsList() {
  return (
    <Container>
      <Title> Product Name</Title>
      <Hr />
      <Wrapper>
        <ListSlider />
      </Wrapper>
    </Container>
  );
}

export default ProductsList;
const Container = styled.div`
  margin-bottom: 20px;
`;
const Title = styled.span`
  color: white;
`;
const Hr = styled.hr`
  background-color: white;
  border: none;
  height: 1px;
  /* width: 92%; */
`;
const Wrapper = styled.div`
  width: 95vw;
  /* padding: 10px; */
  /* margin: auto; */
  background-color: #131313;
  border-radius: 15px;
`;
