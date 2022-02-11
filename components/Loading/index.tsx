import PokeBall from 'icons/pokeball.svg';

export const Loading = () => {
    return (
      <div className="loading fixed min-h-full min-w-full z-50 flex justify-center items-center top-0 left-0">
        <PokeBall />
      </div>
    );
}