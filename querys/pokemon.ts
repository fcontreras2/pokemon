import { gql } from "@apollo/client";

export const ALL_POKEMONS_QUERY = gql`
    query getListPokemon  {
        data:pokemon_v2_pokemon(limit: 649 ) {
            id
            name
            stats: pokemon_v2_pokemonstats {
                id
                base_stat
                stat:pokemon_v2_stat {
                    id,
                    name,
                  }
            }
            types: pokemon_v2_pokemontypes {
                type:pokemon_v2_type {
                    id
                    name
                }
            }
        }
    }
`;