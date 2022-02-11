const InternalError = () => (
  <div className="p-0 background flex relative min-h-screen pb-20">
    <div className="m-auto w-max p-20 relative bg-blue-dark-600  bg-opacity-20 flex flex-col items-center justify-center ">
      <h2 className="text-white font-audio text-7xl pb-8">500</h2>
      <img
        className="w-60 pb-8"
        src="/500.png"
      />
      <h2 className="text-white font-audio text-3xl">Server error</h2>
    </div>
  </div>
);

export default InternalError;
