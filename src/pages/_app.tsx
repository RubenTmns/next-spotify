import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string): unknown => fetch(url).then((response) => response.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
