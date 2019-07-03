const fs = require('fs')
const path = require('path')
const mdx = require('@mdx-js/mdx')
const babel = require('@babel/core')
const slugify = require('./slugify')

module.exports = async function main() {
    const postsDir = path.resolve('pages', 'blog')
    const allPostFiles = await fs.promises.readdir(postsDir)

    const allPosts = []

    for (const file of allPostFiles) {
        const filePath = path.resolve(postsDir, file)
        const src = await fs.promises.readFile(filePath, { encoding: 'utf8' })
        const compiled = await babel.transformAsync(
            await mdx(src),
            babel.loadOptions({
                babelrc: false,
                presets: ['@babel/preset-react'],
                plugins: ['@babel/plugin-transform-modules-commonjs'],
            })
        )

        const mod = new module.constructor()
        mod._compile(compiled.code, filePath)

        const {
            exports: { meta },
        } = mod

        allPosts.push({
            filePath,
            urlPath: `/blog/${slugify(meta.title.replace(/\.mdx?$/, ''))}`,
            title: meta.title,
            publishDate: new Date(meta.publishDate),
        })
    }

    allPosts.sort((a, b) => b.publishDate - a.publishDate)

    const outputFile = path.resolve('posts.ts')
    await fs.promises.writeFile(
        outputFile,
        `export default ${JSON.stringify(allPosts, null, 2)}`
    )
}
