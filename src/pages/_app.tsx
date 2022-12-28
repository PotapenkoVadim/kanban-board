import '@/styles/globals.scss';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { Mukta } from '@next/font/google';
import Head from 'next/head';
import favicon from '@/public/favicon.ico';
import { store } from '@/store/index';

const muktaFont = Mukta({
  variable: '--mukta-font',
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <style
        jsx
        global>{`
        :root {
          --mukta-font: ${muktaFont.variable};
        }
      `}</style>
      <Head>
        <title>Kanban Board</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1' />
        <link
          rel='shortcut icon'
          href={favicon.src} />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
