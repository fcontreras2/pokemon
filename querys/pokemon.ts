import { gql } from "@apollo/client";

export const ALL_POKEMONS_QUERY = gql`
  query getListPokemon($searching: String = "") {
    data: pokemon_v2_pokemon(
      where: { id: { _lt: 1000 }, _and: { name: { _iregex: $searching } } }
    ) {
      id
      name
      pokemon_species_id
      specy: pokemon_v2_pokemonspecy {
        is_baby
        forms_switchable
        base_happiness
        gender_rate
        name
      }
      pokemon_v2_pokemonabilities {
        slot
        pokemon_v2_ability {
          name
        }
      }
      height
      weight
      stats: pokemon_v2_pokemonstats {
        id
        base_stat
        effort
        stat: pokemon_v2_stat {
          id
          name
          game_index
          is_battle_only
          move_damage_class_id
        }
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;

export const GET_POKEMON_BY_NAME = gql`
  query getPokeonByNae($name: String = "") {
    data: pokemon_v2_pokemon(
      offset: 0
      limit: 10
      where: { name: { _eq: $name } }
    ) {
      id
      name
      pokemon_species_id
      specy: pokemon_v2_pokemonspecy {
        is_baby
        forms_switchable
        base_happiness
        gender_rate
        name
      }
      pokemon_v2_pokemonabilities {
        slot
        pokemon_v2_ability {
          name
        }
      }
      height
      weight
      stats: pokemon_v2_pokemonstats {
        id
        base_stat
        effort
        stat: pokemon_v2_stat {
          id
          name
          game_index
          is_battle_only
          move_damage_class_id
        }
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;
