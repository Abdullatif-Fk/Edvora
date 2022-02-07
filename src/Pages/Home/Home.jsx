import React from "react";
import styled from "styled-components";
import ProductsList from "../../components/ProductsList/ProductsList";
function Home() {
  return (
    <Container>
      <Left></Left>
      <Right>
        <Title>Edvora</Title>
        <ListTitle>Products</ListTitle>
        <ProductsList />
        <ProductsList />
      </Right>
    </Container>
  );
}

export default Home;
const Container = styled.div``;
const Left = styled.div``;
const Right = styled.div`
  margin-left: 15px;
`;
const Title = styled.h1`
  color: white;
`;
const ListTitle = styled.h2`
  color: white;
`;
