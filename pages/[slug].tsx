import PokemonDetail, { PokemonDetailImage } from "components/PokemonDetail";
import { Pokemon } from "interfaces/pokemon";
import { GET_POKEMON_BY_NAME } from "querys/pokemon";
import NavBar from "shared/NavBar";
import PokeballType from "icons/pokeball-type.svg";
import { useQuery } from "@apollo/client";
import { Response } from "interfaces/response";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { Loading } from "components/Loading";

const PokemonView = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery<Response<Pokemon[]>>(
    GET_POKEMON_BY_NAME,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        name: router.query.slug,
      },
    }
  );

  useEffect(() => {
    if (error) {
      router.push("/500");
    }
  }, [error]);

  const pokemon = useMemo(() => {
    return data?.data[0];
  }, data?.data);

  return (
    <div className="p-0 background m-0 relative min-h-screen bg-blue-dark-400 pt-[64px]">
      <NavBar />
      <div className=" container mx-auto  bg-opacity-70 py-10 px-2 tablet:px-8">
        {loading ? (
          <Loading />
        ) : (
          <PokemonDetail pokemon={pokemon as Pokemon}>
            <PokemonDetailImage />
            <div className="p-4 desktop:w-2/3 desktop:p-8 text-white ">
              <h1 className="font-semibold text-[28px] uppercase font-mono ">
                {pokemon?.name}
              </h1>
              <h2 className="font-bold text-[20x] mt-2 mb-4 border-b-blue-dark-300 border-b-2 leading-7 px-2 ">
                Stats
              </h2>
              <div className="flex flex-wrap">
                {pokemon?.stats.map((e, index) => (
                  <span
                    key={e.stat.name + index}
                    className="font-mono mr-2 mb-2 text-[14px] font-bold bg-blue-dark-400 text-white rounded-full px-2"
                  >
                    {e.stat.name}:{e.base_stat}
                  </span>
                ))}
              </div>
              <h2 className="font-bold text-[20x]  mt-6 mb-4 border-b-blue-dark-300 border-b-2 leading-7 px-2 ">
                Types
              </h2>
              <div className="flex flex-wrap ">
                {pokemon?.types.map((type, i) => (
                  <div className="flex mr-4" key={pokemon.id + "-type-" + i}>
                    <PokeballType
                      className={`w-4 pokeball-type-${type.type.name}`}
                    />
                    <span className=" uppercase ml-1 text-xs text-white font-semibold font-poppins text-">
                      {type.type.name}
                    </span>
                  </div>
                ))}
              </div>
              <h2 className="font-bold text-[20x]  mt-6 mb-4 border-b-blue-dark-300 border-b-2 leading-7 px-2 ">
                specy
              </h2>
              <div className="flex flex-wrap">
                <span className="font-mono mr-2 mb-2 text-[14px] font-bold bg-blue-dark-400 text-white rounded-full px-2">
                  Is Legendary: {String(Boolean(pokemon?.specy?.is_legendary))}
                </span>
                <span className="font-mono mr-2 mb-2 text-[14px] font-bold bg-blue-dark-400 text-white rounded-full px-2">
                  Is baby: {pokemon?.specy?.is_baby.toString()}
                </span>
                <span className="font-mono mr-2 mb-2 text-[14px] font-bold bg-blue-dark-400 text-white rounded-full px-2">
                  Base happiness: {pokemon?.specy?.base_happiness}
                </span>
              </div>
            </div>
          </PokemonDetail>
        )}
      </div>
    </div>
  );
};

export default PokemonView;
