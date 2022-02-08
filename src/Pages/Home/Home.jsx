import React from "react";
import styled from "styled-components";
import Filters from "../../components/Filters/Filters";
import ProductsList from "../../components/ProductsList/ProductsList";
function Home() {
  return (
    <Container>
      <Left>
        <Filters />
      </Left>
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
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  margin: 20px;
  width: 15vw;
`;
const Right = styled.div`
  margin-left: 15px;
  width: 83vw;
`;
const Title = styled.h1`
  color: white;
`;
const ListTitle = styled.h2`
  color: white;
`;
