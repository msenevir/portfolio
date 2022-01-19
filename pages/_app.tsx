import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <div className="wrap">
      <Head>
        <title>Mahen Seneviratne</title>
        <meta name="description" content="personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>

      <header>
        <Link href="/">
          <a>
            <Image
              className="logo-image"
              src="/logo.svg"
              alt="logo"
              width={60}
              height={60}
            />
          </a>
        </Link>

        <ul className="nav nav-list">
          <li className="nav-list-item">
            <Link href="/">
              <a
                className={`nav-list-link${pathname === "/" ? " active" : ""}`}
              >
                HOME
              </a>
            </Link>
          </li>

          <li className="nav-list-item">
            <Link href="/resume">
              <a
                className={`nav-list-link${
                  pathname === "/resume" ? " active" : ""
                }`}
              >
                RESUME
              </a>
            </Link>
          </li>

          <li className="nav-list-item">
            <a
              className="nav-list-link"
              href="https://github.com/msenevir"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
          </li>
        </ul>
      </header>

      <main className="container">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
