import React from "react";
import styled from "styled-components";

function Product() {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src="logo192.png" />
        </ImageContainer>
        <ProductInfo>
          <Name>Product Name</Name>
          <Brand>Brand Name</Brand>
          <Price>$ 29.99</Price>
        </ProductInfo>
      </Wrapper>
      <Wrapper>
        <Location>Location</Location>
        <Date>Date: 10-12-2021</Date>
      </Wrapper>
      <Wrapper>
        <Desc> Description of the Product</Desc>
      </Wrapper>
    </Container>
  );
}

export default Product;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  background-color: #232323;
  border-radius: 5px;
  padding: 15px;
  color: white;
  margin: 15px 0px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageContainer = styled.div`
  margin-right: 10px;
`;
const Image = styled.img`
  width: 80px;
  flex: 1;
  border-radius: 5px;
  /* border: 1px solid black; */
`;
const ProductInfo = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex: 2;
`;
const Name = styled.span`
  margin-bottom: 8px;
`;
const Brand = styled.span`
  margin-bottom: 8px;
  color: #a7a7a7;
  font-weight: 100;
  font-size: 16px;
`;
const Price = styled.span`
  margin-bottom: 8px;
`;
const Location = styled.span`
  margin-bottom: 8px;
  flex: 1;
  margin-right: 10px;
  color: #a7a7a7;
  font-weight: 100;
  font-size: 16px;
`;
const Date = styled.span`
  margin-bottom: 8px;
  color: #a7a7a7;
  font-weight: 100;
  font-size: 16px;

  flex: 2;
`;
const Desc = styled.span`
  margin-bottom: 8px;
  color: #a7a7a7;
  font-weight: 100;
  font-size: 16px;
`;
