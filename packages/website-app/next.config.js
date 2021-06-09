const path = require('path')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
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

module.exports = withPlugins(
    [
        [
            optimizedImages,
            {
                handleImages: ['jpeg', 'jpg', 'png'],
                // See: https://github.com/cyrilwanner/next-optimized-images#responsive
                responsive: {
                    adapter: require('responsive-loader/sharp'),
                    sizes: [300, 320, 640],
                    placeholder: true,
                    placeholderSize: 40,
                },
            },
        ],
    ],
    nextConfig
)
