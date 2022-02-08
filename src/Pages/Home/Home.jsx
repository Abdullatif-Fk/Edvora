import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Filters from "../../components/Filters/Filters";
import ProductsList from "../../components/ProductsList/ProductsList";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://assessment-edvora.herokuapp.com");
        // console.log(products);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  let group = products.reduce((r, a) => {
    // console.log("a", a);
    // console.log('r', r);
    r[a.product_name] = [...(r[a.product_name] || []), a];
    return r;
  }, {});
  console.log("group", Object.entries(group));
  return (
    <Container>
      <Left>
        <Filters names={Object.keys(group)} />
      </Left>
      <Right>
        <Title>Edvora</Title>
        <ListTitle>Products</ListTitle>
        {Object.entries(group).map((list, key) => (
          <ProductsList name={list[0]} products={list[1]} key={key} />
        ))}
      </Right>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  margin: 30px;
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
