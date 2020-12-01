import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const now = new Date();

  return { props: { now }};
}

export default Home;