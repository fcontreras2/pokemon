import Image from "next/image";
import { useContext } from "react";
import { CardPokemonContext } from "./index";

export const CardPokeImage = () => {
  const { pokemon } = useContext(CardPokemonContext);

  return (
    <div className="relative   mx-4 mb-4 mr-0 h-max z-10 flex justify-end pr-2">
      <Image
        className="card-image h-40 w-40"
        src={process.env.NEXT_PUBLIC_URL_POKEMON_IMAGE + pokemon.id + ".svg"}
        alt={"Pokemon " + pokemon.name}
				width={160}
				height={160}
				loading={"lazy"}
      />
    </div>
  );
};
