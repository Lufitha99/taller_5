import React from "react";
import styled from "styled-components";

// Tarjeta de producto estilizada
const Card = styled.div`
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  width: 21%;
  margin: 20px;
`;

const Name = styled.h1`
  font-weight: 800;
  color: #333;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.2rem; /* Reducimos tamaño para que se vea bien */
`;

const ImgProduct = styled.img`
  width: 231px;
  height: 261px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 10px;

    &:hover {
    width: 250px;
    height: 280px;
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const Price = styled.h3`
  font-weight: 800;
  color: #333;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;
`;

const Description = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #666; 
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 15px;
`;

const Button = styled.button`
  background: #1267a6;
  color: white;
  border-radius: 10px;
  font-size: small;
  padding: 6px 12px;
  margin: 5px 5px 5px 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
  background-color: #042b47;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 1.15);

  }
`;
const ContainerButtons = styled.div`
  display:flex;
  justify-content: center;
`;

function ProductCard({ name, imageUrl, price, description }) {
  return (
    <Card>
      <Name>{name}</Name>
      <ImgProduct src={imageUrl} alt={name} />
      <Price>{price}</Price>
      <Description>{description}</Description>
      <ContainerButtons>
        <Button>Comprar</Button>
      <Button>Agregar al carrito</Button> 
      </ContainerButtons>
     
    </Card>
  );
}

export default ProductCard;
