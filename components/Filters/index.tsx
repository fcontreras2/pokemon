import { useEffect, useState } from "react";
import useDebounce from "hooks/useDebounce";
import { useRouter } from "next/router";

type FiltersProps = {
  totalItems: number;
};

const Filters = ({ totalItems }: FiltersProps) => {
  const router = useRouter();
  const [searching, setSearching] = useState<string>(
    (router.query?.searching || "") as string
  );

  const deb = useDebounce(searching, 2000);

  useEffect(() => {
    if (searching !== "") router.push("/?searching=" + searching);
    else if (router.query.searching) router.push("/?page=0");
  }, [deb]);

  return (
    <div className=" border-b-0 border-b-blue-dark-200 cursor-pointer">
      <div className="container relative overflow-hidden mx-auto bg-gradient-to-tl from-blue-dark-300 to-blue-dark-600">
        <img
          className="absolute w-72 h-auto -bottom-20 right-10 opacity-20"
          src="/bg.png"
        />
        <div className="mx-auto flex justify-between">
          <div className=" relative flex px-6 py-10 flex-col space-y-2 desktop:w-1/2 large:w-1/3 justify">
            <label className=" font-audio text-white flex items-center space-x-2">
              <span className="block">Search by name</span>
            </label>
            <input
              autoFocus
              placeholder="Search your pokemon"
              value={searching}
              onChange={(e) => {
                setSearching(e.target.value);
              }}
              className=" rounded-2xl py-4 px-5 border-2   font-light border-blue-dark-300 text-blue-dark-300 outline-none focus:border-blue-dark-100 focus:shadow-md     focus:transition-shadow transition-shadow  focus:shadow-blue-dark-100 "
            />
          </div>
          <div className="px-6 z-10  py-10 desktop:w-1/2 large:w-1/4 flex text-right justify-end items-end flex-col">
            <span className="font-audio text-white">Results</span>
            <h3 className="text-white text-5xl font-audio">{totalItems}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
