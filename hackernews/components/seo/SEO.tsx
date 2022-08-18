import Head from 'next/head';

export const SEO = () => {
  return (
    <Head>
        <title>Hacker News</title>
        <meta name="description" content="Hacker News" />
        <meta name="author" content="Mads Haerup" />
        <meta property="og:title" content="Hacker News" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
