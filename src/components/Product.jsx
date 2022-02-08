import React from "react";
import styled from "styled-components";
import moment from "moment";

function Product({ product }) {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>
        <ProductInfo>
          <Name>{product.product_name} </Name>
          <Brand>{product.brand_name}</Brand>
          <Price>$ {product.price}</Price>
          {/* <Date>Date: {moment(product.time).format("DD:MM:YYYY")}</Date> */}
        </ProductInfo>
      </Wrapper>
      <Wrapper>
        <Location>
          {product.address.city}, {product.address.state}{" "}
        </Location>
        <Date>
          <span style={{ fontSize: 14 }}>Date:</span>{" "}
          {moment(product.time).format("DD:MM:YYYY")}
        </Date>
      </Wrapper>
      <Wrapper>
        <Desc> {product.discription}</Desc>
      </Wrapper>
    </Container>
  );
}

export default Product;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  background-color: #232323;
  border-radius: 5px;
  padding: 15px;
  color: white;
  margin: 15px 0px;
`;
const Wrapper = styled.div`
  display: flex;
  /* flex-direction: row; */
`;
const ImageContainer = styled.div`
  /* margin-right: 10px; */
  flex: 1;
`;
const Image = styled.img`
  width: 120px;
  border-radius: 5px;
  /* border: 1px solid black; */
`;
const ProductInfo = styled.div`
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* margin-left: 10px; */
  flex: 1;
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
  margin: 8px 0px;
  color: #a7a7a7;
  font-weight: 100;
  font-size: 16px;
  flex: 1;
`;
const Date = styled.span`
  margin: 8px 0px;
  color: #a7a7a7;
  font-weight: 100;
  font-size: 16px;
  flex: 1;
`;
const Desc = styled.span`
  margin-bottom: 8px;
  color: #a7a7a7;
  font-weight: 100;
  font-size: 16px;
`;
