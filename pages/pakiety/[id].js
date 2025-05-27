import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function PakietyPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <Head>
        <title>Pakiety Page</title>
      </Head>

      <main>
        <h1>Pakiety Page</h1>
        <p>ID: {id}</p>
        <div className="back-link">
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </div>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 1rem;
          text-align: center;
        }
        main {
          padding: 2rem;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          margin: 2rem 0;
        }
        .back-link {
          margin-top: 1.5rem;
        }
        .back-link a {
          color: #0070f3;
          text-decoration: none;
        }
        .back-link a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
