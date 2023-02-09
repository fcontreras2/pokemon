import { useContext } from "react";
import { CardPokemonContext } from "providers/pokemon.context";

export const CardPokeStats = () => {
  const { pokemon, mainType } = useContext(CardPokemonContext);

  return (
    <div
      className={`absolute ${
        "bg-" + mainType + "-500"
      } h-10 bottom-0 w-full bg-opacity-40 p-2 text-center`}
    >
      <span className=" border-collapse text-xs font-audio p-1 mr-2 rounded-sm font-semibold text-white">
        {" "}
        {pokemon.stats[0].stat.name.toLocaleUpperCase().substring(0, 3)}:
        {pokemon.stats[0].base_stat}{" "}
      </span>
      <span className=" border-collapse text-xs font-audio p-1 mr-2 rounded-sm font-semibold text-white">
        {" "}
        {pokemon.stats[1].stat.name.toLocaleUpperCase().substring(0, 3)}:
        {pokemon.stats[1].base_stat}{" "}
      </span>
      <span className=" border-collapse text-xs font-audio p-1 mr-2 rounded-sm font-semibold text-white">
        {" "}
        {pokemon.stats[2].stat.name.toLocaleUpperCase().substring(0, 3)}:
        {pokemon.stats[2].base_stat}{" "}
      </span>
    </div>
  );
};