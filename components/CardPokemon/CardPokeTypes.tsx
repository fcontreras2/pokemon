import { useContext } from "react";
import PokeballType from "icons/pokeball-type.svg";
import { CardPokemonContext } from "providers/pokemon.context";

export const CardPokeTypes = () => {
  const { pokemon } = useContext(CardPokemonContext);

  return (
    <div className="absolute ml-3 p-1 rounded-md card-pokeballs flex hover:space-x-0 hover:space-y-1 space-x-1">
      {pokemon.types.map((type, i) => (
        <div className="flex" key={ pokemon.id + "-type-" + i} >
          <PokeballType className={`w-4 pokeball-type-${type.type.name}`} />
          <span className="hidden uppercase ml-1 text-xs text-white font-semibold font-poppins text-">
            {type.type.name}
          </span>
        </div>
      ))}
    </div>
  );
};

