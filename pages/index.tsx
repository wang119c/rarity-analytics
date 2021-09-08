import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full mb-16">
        <img alt="sword" src="/img/sword.png" className="mx-auto w-36" />
        <div className="w-full text-white text-center text-3xl uppercase">
          <h1>Rarity Analytics</h1>
        </div>
        <div className="w-full text-white text-center text-xl mt-3">
          <span>Real time information for the Rarity Game</span>
        </div>
      </div>
      <div className="w-full bg-custom-blue text-center pb-24">
        <div className="mx-auto w-3/5 border-white border-2 rounded-lg border-custom-green">

        </div>
      </div>
    </>
  );
};

export default Home;
