const withTypescript = require('@zeit/next-typescript')
const withOffline = require('next-offline')
const withMDX = require('@zeit/next-mdx')()

module.exports = withTypescript(
    withOffline(
        withMDX({
            pageExtensions: ['tsx', 'mdx'],
            exportPathMap: function(defaultPathMap) {
                const pathMap = Object.assign({}, defaultPathMap)
                delete pathMap['/index']
                return pathMap
            },
            workboxOpts: {
                swDest: 'static/service-worker.js',
                runtimeCaching: [
                    {
                        urlPattern: /^https?.*/,
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'https-calls',
                            networkTimeoutSeconds: 15,
                            expiration: {
                                maxEntries: 150,
                                maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                            },
                            cacheableResponse: {
                                statuses: [0, 200],
                            },
                        },
                    },
                ],
            },
        })
    )
)
