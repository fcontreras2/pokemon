export const ModalFiltersContent = () => {
  return (
    <>
      <label className="font-poppins text-gray flex items-center pb-2">
        <span className="block">Buscar por id o nombre</span>
      </label>
      <input
        autoFocus
        placeholder="Busca tu pokemon"
        className=" rounded-md py-4 text-gray px-5 border font-light border-dark-50 outline-none focus:border-blue-dark-50   focus:shadow-blue-dark-100 "
      />
    </>
  );
};
