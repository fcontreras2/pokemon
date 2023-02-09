import Link from "next/link";
import Provider from "providers/pokemon.context";
import { ReactElement } from "react";
import { Pokemon } from "../../interfaces/pokemon";

export { CardPokeImage } from "./CardPokeImage";
export { CardPokeName } from "./CardPokeName";
export { CardPokeStats } from "./CardPokeStats";
export { CardPokeTypes } from "./CardPokeTypes";

type Props = {
  pokemon: Pokemon;
  children: ReactElement | ReactElement[];
};

export const CardPokemon = ({ pokemon, children }: Props) => {
  return (
    <Provider
      value={{
        pokemon,
        mainType: pokemon.types[0].type.name || "normal",
      }}
    >
      <Link href={`/${pokemon.name}`}>
        <a
          className={`card card-bg-pokemon-${pokemon.types[0].type.name} relative hover:cursor-pointer bg-gradient-to-b from-blue-dark-700 to-blue-dark-300  h-full rounded-2xl border-blue-dark-900 border-0 pt-4 pb-14 col-span-4 tablet:col-span-6 desktop:col-span-6 large:col-span-4 border-radius-1`}
        >
          {children}
          <div className="card-id-pokemon font-audio">{pokemon.id}</div>
          <div className={`card-bg-pokemon `}></div>
        </a>
      </Link>
    </Provider>
  );
};
