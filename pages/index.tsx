import React from "react";
import NavBar from "../shared/NavBar";
import { useQuery } from "@apollo/client";
import { ALL_POKEMONS_QUERY } from "../querys/pokemon";
import { Pokemon } from "../interfaces/pokemon";
import { Response } from "../interfaces/response";
import {
  CardPokemon,
  CardPokeImage,
  CardPokeName,
  CardPokeStats,
  CardPokeTypes,
} from "../components/CardPokemon";
import { Loading } from "components/Loading";
import Head from "next/head";
import usePagination from "hooks/usePagination";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Pagination from "components/Pagination";

export default function Home() {
  const router = useRouter();
  const { loading, data, error } = useQuery<Response<Pokemon[]>>(
    ALL_POKEMONS_QUERY,
    {
      variables: {},
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  );

  const {
    data: pokemons,
    handlePagination,
    totalItems,
    currentPage,
  } = usePagination<Pokemon>({
    data: data ? data.data : [],
    page: 0,
    perPage: 60,
    loading,
  });

  useEffect(() => {
    if (error) {
      router.push("/500");
    }
  }, [error]);

  return (
    <>
      <Head>
        <title>Pokemon - Pokedex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Pokemon, list all pokemon. This is a Frontend development with Nextjs + Typescript + Tailwind"
        />
      </Head>
      <div className="p-0 background m-0 relative min-h-screen bg-blue-dark-400 pb-20">
        <NavBar />

        <div className=" container mx-auto pt-24">
          {!pokemons || loading ? (
            <Loading />
          ) : (
            <>
              <div className=" grid grid-cols-4 tablet:grid-cols-12 desktop:grid-cols-24 gap-4 flex-wrap px-4 tablet:px-0">
                {pokemons?.map((pokemon) => (
                  <CardPokemon key={"pokemon-" + pokemon.id} pokemon={pokemon}>
                    <CardPokeTypes />
                    <CardPokeImage />
                    <CardPokeName />
                    <CardPokeStats />
                  </CardPokemon>
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                handlePagination={handlePagination}
                totalItems={totalItems}
                perPage={60}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
