import React from "react";
import styled from "styled-components";
const Filter = ({ name, data }) => {
  return (
    <Container>
      <Select>
        <Option>{name}</Option>
        <Option>2</Option>
        <Option>2</Option>
        <Option>2</Option>
        <Option>2</Option>
        <Option>2</Option>
        <Option>2</Option>
      </Select>
    </Container>
  );
};

export default Filter;
const Container = styled.div``;
const Select = styled.select`
  width: 100%;
  margin: 5px 0px;
  color: #a5a5a5;
  background-color: #232323;
  border: none;
  height: 25px;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='rgb(165,165,165)' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
`;
const Option = styled.option``;
