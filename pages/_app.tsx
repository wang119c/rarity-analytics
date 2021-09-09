import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Popover } from "@headlessui/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import WrappedWeb3ReactProvider, { Web3ConnectionManager } from "../connector";
import { useWeb3React } from "@web3-react/core";

const client = new ApolloClient({
  uri: "https://api.rarity.game/subgraphs/name/rarity",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <title key="title">Rarity Game | Analytics</title>

      <meta key="description" name="description" content="Explore rarity" />

      <meta name="application-name" content="Rarity Game | Analytics" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="Rarity Game | Analytics"
      />

      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#3E4A94" />

      <meta key="twitter:card" name="twitter:card" content="app" />
      <meta
        key="twitter:title"
        name="twitter:title"
        content="Rarity Game | Analytics"
      />
      <meta
        key="twitter:url"
        name="twitter:url"
        content="https://analytics.rarity.game"
      />
      <meta
        key="twitter:description"
        name="twitter:description"
        content="Explore rarity"
      />
      <meta
        key="twitter:image"
        name="twitter:image"
        content="https://analytics.rarity.game/manifest-icon-192.png"
      />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content="@RarityGame"
      />
      <meta key="og:type" property="og:type" content="website" />
      <meta
        key="og:site_name"
        property="og:site_name"
        content="Rarity Game | Analytics"
      />
      <meta
        key="og:url"
        property="og:url"
        content="https://analytics.rarity.game"
      />
      <meta
        key="og:image"
        property="og:image"
        content="https://analytics.rarity.game/apple-icon-180.png"
      />
      <meta
        key="og:description"
        property="og:description"
        content="Explore rarity"
      />
      <div className="bg-custom-background">
        <header className="flex-shrink-0 w-full text-white">
          <Popover
            as="nav"
            className="z-10 w-full bg-transparent header-border-b"
          >
            <>
              <div className="px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center uppercase">
                    <a
                      href={"/"}
                      className="uppercase text-xl p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
                    >
                      <h1>RARITY ANALYTICS</h1>{" "}
                    </a>
                  </div>
                  <div className="fixed bottom-0 left-0 z-10 flex flex-row items-center justify-center w-full p-4 lg:w-auto bg-custom-background lg:relative lg:p-0 lg:bg-transparent">
                    <a
                      className="mx-2 text-3xl"
                      href="https://twitter.com/RarityGame"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      className="mx-2 text-3xl"
                      href="https://discord.gg/NUrfGsUkmd"
                    >
                      <FontAwesomeIcon icon={faDiscord} />
                    </a>
                    <a
                      className="mx-2 text-3xl"
                      href="https://github.com/rarity-adventure"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            </>
          </Popover>
        </header>
        <WrappedWeb3ReactProvider>
          <Web3ConnectionManager>
            <ApolloProvider client={client}>
              <div className="flex flex-col h-screen items-start overflow-x-hidden bg-custom-background">
                <Component {...pageProps} />
              </div>
            </ApolloProvider>
          </Web3ConnectionManager>
        </WrappedWeb3ReactProvider>
      </div>
    </>
  );
}

export default MyApp;
