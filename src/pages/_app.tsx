import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Mukta } from '@next/font/google';

const muktaFont = Mukta({
  variable: '--mukta-font',
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <style jsx global>{`
        :root {
          --mukta-font: ${muktaFont.variable};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
