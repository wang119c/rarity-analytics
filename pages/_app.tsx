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

const client = new ApolloClient({
  uri: "https://api.rarity.game/subgraphs/name/rarity",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-custom-background">
      <header className="flex-shrink-0 w-full text-white">
        <Popover
          as="nav"
          className="z-10 w-full bg-transparent header-border-b"
        >
          {({ open }) => (
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
          )}
        </Popover>
      </header>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

export default MyApp;
