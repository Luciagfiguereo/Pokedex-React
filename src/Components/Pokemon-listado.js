import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

`;

const Card = styled(Link)`
  text-decoration: none;
  color: inherit;
  border: 2px solid #ddd;
  margin: 16px;
  padding: 12px;
  border-radius: 22px;
  text-align: left;
  width: 250px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Pokemonimg = styled.img`
  max-width: 100%;
  height: 250px;
  justify-content: center;
`;



const PokemonName = styled.h3`
  margin: px 0;
  font-size: 20px;
  color: #858585;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const PokemonListado = () => {
  const [pokemonListado, setPokemonListado] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        const pokemonDetailsPromises = response.data.results.map(async (pokemon) => {
          const detailsResponse = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            id: detailsResponse.data.id,
            image: detailsResponse.data.sprites.front_default,
            baseExperience: detailsResponse.data.base_experience,
            types: detailsResponse.data.types.map((type) => type.type.name).join(', '),
            abilities: detailsResponse.data.abilities.map((ability) => ability.ability.name).join(', '),
          };
        });
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemonListado(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };
  const handleCloseDetails = () => {
    setSelectedPokemon(null);
  };

  return (
    <CardContainer>
      {pokemonListado.map((pokemon, index) => (
        <Card key={index} onClick={() => handleCardClick(pokemon)}>
          <Pokemonimg src={pokemon.image} alt={pokemon.name} />
          <PokemonName>{pokemon.name}</PokemonName>
          
      
          
        </Card>
      ))}
      {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} onClose={handleCloseDetails}  />}
    </CardContainer>
  );
};

export default PokemonListado;
