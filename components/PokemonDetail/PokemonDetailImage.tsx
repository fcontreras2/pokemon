import { CardPokeName, CardPokeStats } from "components/CardPokemon";
import Image from "next/image";
import { CardPokemonContext } from "providers/pokemon.context";
import { useContext } from "react";

export const PokemonDetailImage = () => {
  const { pokemon } = useContext(CardPokemonContext);
  return (
    <div className={`w-full desktop:w-1/3 flex items-center relative justify-center bg-gradient-to-b from-blue-dark-700 to-blue-dark-300  h-full `}>
      <Image
        className="card-image"
        src={
          process.env.NEXT_PUBLIC_URL_POKEMON_IMAGE +
          ("00" + pokemon.id).slice(-3) +
          ".png"
        }
        alt={"Pokemon " + pokemon.name}
        width={250}
        height={250}
        loading={"lazy"}
      />
      <CardPokeName />
      <CardPokeStats />
    </div>
  );
};

export default PokemonDetailImage;
