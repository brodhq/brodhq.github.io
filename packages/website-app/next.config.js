const path = require('path')

module.exports = {
    target: 'serverless',
    distDir: 'build',
    // future: {
    //     webpack5: true,
    // },
    webpack: function (config) {
        config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
        config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' })
        // Avoid issue with hook usage in external packages and multiple copies of React
        config.resolve.alias.react = path.resolve('./node_modules/react')
        return config
    },
}
