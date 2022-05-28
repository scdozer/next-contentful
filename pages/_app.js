import { AppContextProvider } from 'context';
import { GlobalStyles } from 'styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
