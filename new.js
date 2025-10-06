// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

// This is a standard React Component (executed on the client and server)
export default function HomePage() {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Next.js starter home page" />
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-extrabold text-center my-8">
          Hello Next.js World!
        </h1>

        <p className="text-xl text-center mb-6">
          This is the home page using the **Pages Router**.
        </p>

        {/* Use the built-in Link component for client-side navigation */}
        <div className="text-center">
          <Link 
            href="/dashboard" 
            className="text-lg text-purple-600 hover:text-purple-800 transition"
          >
            Visit Dashboard
          </Link>
        </div>
      </div>
    </>
  );


