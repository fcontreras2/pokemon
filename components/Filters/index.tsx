import { useContext } from 'react';
import { ModalContext } from 'components/Modal/context/ModalContext';
import PokeBall from 'icons/pokeball.svg';
import ModalFilters from 'components/Modal/ModalFilters';

const Filters = ({ totalItems }: { totalItems: number }) => {

  const { open } = useContext(ModalContext);

  const handleOpen = () => {
    open({...ModalFilters()})
  }

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
              <span className="block">Buscar por id o nombre</span>
            </label>
            <input
              autoFocus
              placeholder="Busca tu pokemon"
              className=" rounded-md py-4 px-5 border-2   font-light border-blue-dark-300 text-blue-dark-300 outline-none focus:border-blue-dark-100 focus:shadow-md     focus:transition-shadow transition-shadow  focus:shadow-blue-dark-100 "
            />
          </div>
          <div className="px-6 z-10  py-10 desktop:w-1/2 large:w-1/4 flex text-right justify-end items-end flex-col">
            <span className="font-audio text-white">Resultados</span>
            <h3 className="text-white text-5xl font-audio">{totalItems}</h3>
          </div>

          <span onClick={handleOpen} className="text-xs absolute bottom-0 left-6 bg-blue-dark-400  px-4 pb-2 rounded-t-lg text-white font-semibold flex items-center space-x-2 pt-2">
              <PokeBall width={"14"} height={"14"} fill="red" />
              <span>Filtros avanzados</span>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Filters;