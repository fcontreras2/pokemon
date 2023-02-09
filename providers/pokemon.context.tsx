import { createContext } from "react";
import { Pokemon } from "interfaces/pokemon";

type CardPokemonProps = {
  pokemon: Pokemon;
  mainType: string;
};

export const CardPokemonContext = createContext({} as CardPokemonProps);

const { Provider } = CardPokemonContext;


export default Provider; 