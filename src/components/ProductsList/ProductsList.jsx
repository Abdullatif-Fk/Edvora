import React from "react";
import styled from "styled-components";
import ListSlider from "../ListSlider/ListSlider";

function ProductsList({ name, products }) {
  return (
    <Container>
      <Title>{name}</Title>
      <Hr />
      <Wrapper>
        <ListSlider products={products} />
      </Wrapper>
    </Container>
  );
}

export default ProductsList;
const Container = styled.div`
  margin-bottom: 20px;
  position: relative;
`;
const Title = styled.span`
  color: white;
`;
const Hr = styled.hr`
  background-color: white;
  border: none;
  height: 1px;
  position: absolute;
  left: 0;
  width: 96%;
`;
const Wrapper = styled.div`
  width: 97%;

  background-color: #131313;
  border-radius: 15px;
`;
