import React from 'react';
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Pokemon } from "../interfaces/pokemon";
import { Response } from "../interfaces/response";
import { ALL_POKEMONS_QUERY } from "../querys/pokemon";
import NavBar from "../shared/NavBar";
import {
  CardPokemon,
  CardPokeImage,
  CardPokeName,
  CardPokeStats,
  CardPokeTypes,
} from "../components/CardPokemon";
import Pagination from "components/Pagination";
import { Loading } from "components/Loading";
import usePagination from "hooks/usePagination";
import Filters from "components/Filters";

export default function Home() {
  const router = useRouter();

  const { loading, error, data, refetch } = useQuery<Response<Pokemon[]>>(
    ALL_POKEMONS_QUERY,
    {
      notifyOnNetworkStatusChange: true,
      variables: router.query,
    }
  );

  const {
    data: pokemons,
    handlePagination,
    totalItems,
    currentPage,
  } = usePagination<Pokemon>({
    data: data ? data.data : [],
    page: Number(router.query.page),
    perPage: 60,
    loading,
  });

  useEffect(() => {
    if (error) {
      router.push("/500");
    }
  }, [error]);

  useEffect(() => {
    refetch(router.query);
  }, [router.query]);

  useEffect(() => {
    refetch(router.query);
  }, []);

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
      <div className="p-0 background m-0 relative min-h-screen bg-blue-dark-400 pt-[64px]">
        <NavBar />
        <Filters totalItems={totalItems} />
        <div className=" container mx-auto  bg-blue-dark-200 bg-opacity-70 py-10 px-2 tablet:px-8">
          {!pokemons || loading ? (
            <Loading />
          ) : (
            <>
              <div className=" grid grid-cols-4 hover:shadow-xl tablet:grid-cols-12 desktop:grid-cols-24 gap-4 flex-wrap px-4 tablet:px-0">
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
