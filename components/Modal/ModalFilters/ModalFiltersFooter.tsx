import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const ModalFiltersFooter = () => {
  const { close } = useContext(ModalContext);

  return (
    <>
      <button className=" bg-blue-dark-200 border border-blue-dark-200 hover:bg-blue-dark-400 mr-4 text-white py-2 px-4 rounded">
        Filtrar
      </button>
      <button
        onClick={close}
        className=" bg-white border border-blue-dark-200  text-blue-dark-400 hover:bg-blue-dark-200 hover:text-white py-2 px-4 rounded"
      >
        Cancelar
      </button>
    </>
  );
};
