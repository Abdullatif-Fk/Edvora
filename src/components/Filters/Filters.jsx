import React from "react";
import styled from "styled-components";
import Filter from "../Filter/Filter";
const Filters = () => {
  return (
    <Container>
      <Title>Filters</Title>
      <Hr />
      <Wrapper>
        <Filter name="Products" />
        <Filter name="City" />
        <Filter name="State" />
      </Wrapper>
    </Container>
  );
};

export default Filters;
const Container = styled.div`
  width: 80%;
  color: #a5a5a5;
  font-weight: 100;
  background-color: #131313;
  border-radius: 15px;
  padding: 20px;
`;
const Title = styled.span``;
const Hr = styled.hr`
  background-color: #a5a5a5;
  border: none;
  height: 1px;
`;
const Wrapper = styled.div``;
