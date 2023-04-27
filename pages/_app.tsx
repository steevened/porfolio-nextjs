import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { QueryClient } from 'react-query';
import { UIProvider } from '@/context/ui';
import { ThemeProvider as ThemeDarkModeProvider } from 'next-themes';
import { ThemeProvider } from '@material-tailwind/react';
// import { Database } from '../database.types';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P = {}> = AppProps & {
  Component: NextPageWithLayout<P>;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const queryClient = new QueryClient();

  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <ThemeProvider>
      <ThemeDarkModeProvider attribute="class" defaultTheme="system">
        <UIProvider>{getLayout(<Component {...pageProps} />)}</UIProvider>
      </ThemeDarkModeProvider>
    </ThemeProvider>
  );
}
