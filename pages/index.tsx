import NavBar from "../shared/NavBar";
import { useQuery } from '@apollo/client';
import { ALL_POKEMONS_QUERY } from "../querys/pokemon";
import { Pokemon } from "../interfaces/pokemon";
import { Response } from "../interfaces/response";
import { CardPokemon, CardPokeImage, CardPokeName, CardPokeStats, CardPokeTypes } from "../components/CardPokemon";
import { Loading } from "components/Loading";
import { useEffect, useState } from "react";

export const allPostsQueryVars = {
  skip: 0,
  first: 30,
}

export default function Home() {
  
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  const { loading, data } = useQuery<Response<Pokemon[]>>(
    ALL_POKEMONS_QUERY,
    {
      variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  )

  useEffect(() => {
    if (!loading) {
        setPokemons(data?.data.slice(0, 60))
    }
  },[loading, data]);

  return (
    <div className="p-0 background m-0 relative min-h-screen bg-blue-dark-400 pb-20">
      <NavBar />

      <div className=" container mx-auto pt-24">
        <div className=" grid grid-cols-4 tablet:grid-cols-12 desktop:grid-cols-24 gap-4 flex-wrap px-4 tablet:px-0">
          {!pokemons || loading ? (
            <Loading />
          ) : (
            pokemons?.map((pokemon) => (
              <CardPokemon key={"pokemon-" + pokemon.id} pokemon={pokemon}>
                <CardPokeTypes />
                <CardPokeImage />
                <CardPokeName />
                <CardPokeStats />
              </CardPokemon>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
