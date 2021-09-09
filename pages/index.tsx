import type { NextPage } from "next";
import { useSubscription } from "@apollo/client";

import { METADATA } from "../apollo/queries";
import { useCallback, useEffect, useState } from "react";
import useRarity from "../hooks/useRarity";

const Home: NextPage = () => {
  const { data, loading, error } = useSubscription(METADATA);

  const { nextSummoner } = useRarity();

  const [metadata, setMetadata] = useState<{
    barbarians: number;
    bards: number;
    clerics: number;
    druids: number;
    fighters: number;
    monks: number;
    paladins: number;
    rangers: number;
    rogues: number;
    sorcerers: number;
    summoners: number;
    wizards: number;
  }>({
    barbarians: 0,
    bards: 0,
    clerics: 0,
    druids: 0,
    fighters: 0,
    monks: 0,
    paladins: 0,
    rangers: 0,
    rogues: 0,
    sorcerers: 0,
    summoners: 0,
    wizards: 0,
  });

  useEffect(() => {
    if (!loading && !error) {
      setMetadata(data.metaDatas[0]);
    }
  }, [data, loading, error]);

  const [state, setState] = useState<{ synced: number }>({ synced: 0 });

  const calcSynced = useCallback(async () => {
    const lastSyncedString = await nextSummoner();
    const lastSynced = parseInt(lastSyncedString.toString());
    const currSynced = metadata.summoners;
    const percentage = ((currSynced * 100) / lastSynced).toFixed(2);
    setState({ synced: parseFloat(percentage) });
  }, [setState, metadata, nextSummoner]);

  useEffect(() => {
    calcSynced();
  }, [calcSynced]);

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
      <div className="w-full bg-custom-blue text-center pb-24 pt-10">
        <div className="w-3/4 xl:w-2/4 bg-custom-green border-custom-border border-8 mx-auto mt-10 p-8 text-xl text-white font-bold mb-24">
          <p className="my-3 font-bold">Total Summoners</p>
          <p>{metadata.summoners}</p>
          <p className="my-3 font-bold">Synced Percentage</p>
          <p>{state.synced}%</p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-10 gap-4 text-center">
            <div className="border-white border-8 p-8">
              <span className="my-2 mx-auto">Barbarians</span>
              <p>
                {((metadata.barbarians * 100) / metadata.summoners).toFixed(2)}%
              </p>
              <h1>{metadata.barbarians}</h1>
            </div>
            <div className="border-white border-8 p-8">
              <span className="my-2">Bards</span>
              <p>{((metadata.bards * 100) / metadata.summoners).toFixed(2)}%</p>
              <h1>{metadata.bards}</h1>
            </div>
            <div className="border-white border-8 p-8">
              <span className="my-2">Clerics</span>
              <p>
                {((metadata.clerics * 100) / metadata.summoners).toFixed(2)}%
              </p>
              <h1>{metadata.clerics}</h1>
            </div>
            <div className="border-white border-8 p-8">
              <span className="my-2">Druids</span>
              <p>
                {((metadata.druids * 100) / metadata.summoners).toFixed(2)}%
              </p>
              <h1>{metadata.druids}</h1>
            </div>
            <div className="border-white border-8 p-8">
              <span className="my-2">Fighters</span>
              <p>
                {((metadata.fighters * 100) / metadata.summoners).toFixed(2)}%
              </p>
              <h1>{metadata.fighters}</h1>
            </div>
            <div className="border-white border-8 p-8">
              <span className="my-2">Monks</span>
              <p>{((metadata.monks * 100) / metadata.summoners).toFixed(2)}%</p>
              <h1>{metadata.monks}</h1>
            </div>
            <div className="border-white border-8 p-8">
              <span className="my-2">Paladins</span>
              <p>
                {((metadata.paladins * 100) / metadata.summoners).toFixed(2)}%
              </p>
              <h1>{metadata.paladins}</h1>
            </div>
            <div className="border-white border-8 p-8">
              <span className="my-2">Rangers</span>
              <p>
                {((metadata.rangers * 100) / metadata.summoners).toFixed(2)}%
              </p>
              <h1>{metadata.rangers}</h1>
            </div>
            <div className="border-white border-8 p-8">
              <span className="my-2">Rogues</span>
              <p>
                {((metadata.rogues * 100) / metadata.summoners).toFixed(2)}%
              </p>
              <h1>{metadata.rogues}</h1>
            </div>
            <div className="border-white border-8 p-8">
              <span className="my-2">Sorcerers</span>
              <p>
                {((metadata.sorcerers * 100) / metadata.summoners).toFixed(2)}%
              </p>
              <h1>{metadata.sorcerers}</h1>
            </div>
            <div className="border-white border-8 p-8">
              <span className="my-2">Wizards</span>
              <p>
                {((metadata.wizards * 100) / metadata.summoners).toFixed(2)}%
              </p>
              <h1>{metadata.wizards}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
