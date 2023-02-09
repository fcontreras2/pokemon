import { useContext } from "react";
import { CardPokemonContext } from "providers/pokemon.context";

export const CardPokeName = () => {
  const { pokemon } = useContext(CardPokemonContext);

  return (
    <div className="absolute z-10 bottom-10 h-10 w-full px-4 bg-blue-dark-600 bg-opacity-80">
      <p className="w-full uppercase font-semibold text-center h-full m-0 text-white  flex items-center justify-center">
        {pokemon.name}
      </p>
    </div>
  );
};
