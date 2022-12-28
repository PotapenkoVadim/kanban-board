import Head from 'next/head';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Kanban Board</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          href='/favicon.ico' />
      </Head>
      <main>
        <h1>Kanban Board</h1>
      </main>
    </>
  );
}
