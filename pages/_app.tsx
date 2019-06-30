import App, { Container } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";

class AppContainer extends App {
  render() {
    const {
      Component,
      pageProps,
      router: { pathname }
    } = this.props;

    console.log("path", pathname);

    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato"
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
