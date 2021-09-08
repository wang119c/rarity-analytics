import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full mb-44">
        <img alt="sword" src="/img/sword.png" className="mx-auto w-36" />
        <div className="w-full text-white text-center text-3xl uppercase">
          <h1>Rarity Analytics</h1>
        </div>
      </div>
      <div className="w-full bg-custom-blue text-center pb-24"></div>
    </>
  );
};

export default Home;
