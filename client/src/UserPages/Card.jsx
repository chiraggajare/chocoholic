import React from "react";
import styled from "styled-components";
function Card({ id, image, title, desc, price }) {
    console.log("basket >>>>", basket);
    
    return (
        <Container>
            <Image>
                <img src={image} alt="" />
            </Image>
            <ProductName>
                <h5>{title}</h5>
                <p>{desc}</p>
                <p>₹ {price}</p>

                <button onClick={addToBasket}>Add to Cart</button>
            </ProductName>
        </Container>
    );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;
const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const ProductName = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;