const NotFound = () => (
  <div className="p-0 background flex relative min-h-screen pb-20">
    <div className="m-auto w-max p-20 relative bg-blue-dark-600  bg-opacity-20 flex flex-col items-center justify-center ">
      <h2 className="text-white font-audio text-7xl pb-8">404</h2>
      <img
        className="w-60 pb-8"
        src="/404.png"
        alt="Pagina 404"
      />
      <h2 className="text-white font-audio text-3xl">Página no encontrada</h2>
      
    </div>
  </div>
);

export default NotFound;
