import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 22px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 300px;
  height: 500px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  text-align: center; /* Center text content */

  /* Add additional styles as needed */
`;

const PokemonImage = styled.img`
  max-width: 100%;
  height: 200px;
  margin-bottom: 10px; /* Add some margin at the bottom */
`;

const CloseButton = styled.button`
  background-color: #90E269;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #6ED040;
  }
`;

const PokemonDetails = ({ pokemon, onClose }) =>  {
  return (
    <ModalOverlay>
      <ModalContent>
        <h2>{pokemon.name}</h2>
        <PokemonImage src={pokemon.image} alt={pokemon.name} />
        <p>#{pokemon.id}</p>
        <p>Experience: {pokemon.baseExperience}</p>
        <p>Types: {pokemon.types}</p>
        <p> {pokemon.abilities}</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PokemonDetails;
