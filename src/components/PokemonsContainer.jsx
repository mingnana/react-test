import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { formatPokemonData } from '../utils/pokemon-helper';
import Loader from './Loader';

const PokemonsContainer = ({ type }) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const API_END_POINT = `https://pokeapi.co/api/v2/type/${type}`;

    const fetchPokemons = async () => {
        setLoading(true);
        try {
            const res = await fetch(API_END_POINT);
            const data = await res.json();

            const { pokemon: pokemonList } = data;

            const fetchedPokemons = await Promise.all(
                pokemonList.map(async ({ pokemon }) => {
                    const res = await fetch(pokemon.url);
                    const data = await res.json();
                    return formatPokemonData(data);
                })
            );

            console.log(fetchedPokemons, 'fetchedPokemons');

            setPokemons(fetchedPokemons);
        } catch (error) {
            console.error(error, 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, [type]);

    if (loading) {
        return <Loader />;
    }

    if (pokemons.length === 0) {
        return (
            <div className="pokemons-container">
                <div className="error-msg">
                    <h2>포켓몬이 없습니다.</h2>
                </div>
            </div>
        );
    }

    console.log(pokemons, 'pokemons');
    return (
        <div className="pokemons-container">
            {pokemons?.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonsContainer;
