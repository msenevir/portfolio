import App, { Container } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";

class AppContainer extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed"
            rel="stylesheet"
            key="google-font-open-sans"
          />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default AppContainer;
