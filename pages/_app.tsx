import App, { Container } from "next/app";
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default AppContainer;
