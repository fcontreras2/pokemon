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
    pages,
    handlePagination,
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

              <div className="flex justify-center my-8  py-4 bg-blue-dark bg-opacity-50 rounded-lg">
                <div className=" flex justify-center space-x-4 items-center">
                  {
                    pages.map((e) => (
                      <button
                        key={"button-pag-" + e}
                        onClick={() => {
                          handlePagination((e as number) - 1);
                        }}
                        className={`font-audio hover:bg-blue-dark-500 ${
                          currentPage === (e as number) - 1
                            ? "bg-blue-dark-500"
                            : "bg-blue-dark-300"
                        } hover:border-dark-200  border-2 border-blue-dark-300  text-white w-10 h-10 p-2 flex justify-center items-center rounded-md `}
                      >
                        {e}
                      </button>
                    ))
                  }
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
