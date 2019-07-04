import App, { Container } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'

class AppContainer extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <title>Mahen Seneviratne</title>
                    <meta name="Description" content="personal portfolio" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#191919" />

                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href="/static/favicon192.png"
                    />

                    <link rel="manifest" href="/static/manifest.json" />

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
        )
    }
}

export default AppContainer
