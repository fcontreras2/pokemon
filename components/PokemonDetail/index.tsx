import { ReactElement } from "react";
import { Pokemon } from "interfaces/pokemon";
import Provider from "providers/pokemon.context";

export { PokemonDetailImage } from "./PokemonDetailImage";

type PokemonDetailProps = {
  pokemon: Pokemon;
  children: ReactElement | ReactElement[];
};

export const PokemonDetail = ({ children, pokemon }: PokemonDetailProps) => {
  return (
    <Provider
      value={{
        pokemon,
        mainType: pokemon.types[0].type.name || "normal",
      }}
    >
      <div className="grid grid-cols-12 gap-4 pokemon-detail">
        <div className="pokemon-detail__wrapper col-span-12 desktop:col-span-10 desktop:col-start-2 large:col-span-8 large:col-start-3 flex flex-col desktop:flex-row rounded-lg  bg-blue-dark-600">
          {children}
        </div>
      </div>  
    </Provider>
  );
};

export default PokemonDetail;
