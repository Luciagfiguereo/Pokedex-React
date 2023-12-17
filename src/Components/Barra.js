import React from 'react';
import styled from 'styled-components';
import PikachuImagen from '../Images/Pokemonimg.png';


const BarraContainer = styled.div`
background-color: #28B463;
align-items: center;
padding: 16px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  
`;

const Logo = styled.img`
height: 60px;
width: auto;
margin-bottom: 20x;
margin-left: 110px;
 
  
`;
const Barra = () => {
    return (
    <BarraContainer>

      <Logo src={PikachuImagen} alt="Logo" />
  
    </BarraContainer>

        );
    };

export default Barra;
