import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ArcadeMachineContextProvider } from '../contexts/ArcadeMachineContext';
import { MediaQueryContextProvider } from '../contexts/MediaQueryContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MediaQueryContextProvider>
      <ArcadeMachineContextProvider>
        <Component {...pageProps} />
      </ArcadeMachineContextProvider>
    </MediaQueryContextProvider>
  );
}
