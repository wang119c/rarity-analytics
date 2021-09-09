import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import React, { useEffect } from "react";
import { NetworkConnector } from "@web3-react/network-connector";
import { useEagerConnect, useInactiveListener } from "./hooks";
import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [250],
});

export const network = new NetworkConnector({
  urls: {
    250: "https://rpcapi-tracing.fantom.network",
  },
});

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function WrappedWeb3ReactProvider({ children }: { children: JSX.Element }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  );
}

export function Web3ConnectionManager({ children }: { children: JSX.Element }) {
  const context = useWeb3React<Web3Provider>();
  const { connector, activate, active } = context;

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  useEffect(() => {
    if (triedEager && !active) {
      activate(network);
    }
  }, [triedEager, active, connector, activate]);

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager);

  return children;
}

export default WrappedWeb3ReactProvider;
