import PokeBall from "icons/pokeball.svg";

export const ModalFiltersHeader = () => {
  return (
    <div className="flex items-center space-x-2">
      <PokeBall width={"20"} height={"20"} fill="red" />
      <h3 className="text-lg font-poppins font-semibold text-white">
        Búsqueda avanzado
      </h3>
    </div>
  );
};
