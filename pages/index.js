import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <style jsx>{`
        .button-container {
          margin-top: 2rem;
          width: 100%;
        }
        .button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .button {
          display: inline-block;
          background-color: #0070f3;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s;
        }
        .button:hover {
          background-color: #0051a2;
        }
        h3 {
          margin-bottom: 0.5rem;
        }
      `}</style>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Test navigation buttons for different routes
        </p>
        
        <div className="button-container">
          <h3>Live</h3>
          <div className="button-row">
            <Link href="/live/one/1">
              <a className="button">Live1</a>
            </Link>
            <Link href="/live/two/2">
              <a className="button">Live2</a>
            </Link>
          </div>
          
          <h3>Pakiety & Program TV</h3>
          <div className="button-row">
            <Link href="/pakiety/3">
              <a className="button">Pakiety</a>
            </Link>
            <Link href="/program-tv/canal/1">
              <a className="button">ProgramTV</a>
            </Link>
            <Link href="/program-tv/polsat/2">
              <a className="button">ProgramTV2</a>
            </Link>
          </div>
          
          <h3>Wideo</h3>
          <div className="button-row">
            <Link href="/wideo/4">
              <a className="button">Wideo</a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
