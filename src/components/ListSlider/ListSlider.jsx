import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../Product";
const ListSlider = ({ products }) => {
  var settings = {
    // dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // initialSlide: 0,
    className: "center",
    infinite: true,
    swipeToSlide: true,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {products?.map((product, key) => (
          <Product product={product} key={key} />
        ))}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </Slider>
    </Container>
  );
};

export default ListSlider;
const Container = styled.div`
  margin-left: 3vw;
  margin: 20px;
`;
