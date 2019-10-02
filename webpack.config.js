var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/typo3conf/ext/typo3_webpack_encore_demo/Resources/Public/')
    .setPublicPath('/typo3conf/ext/typo3_webpack_encore_demo/Resources/Public/')
    .addEntry('app', './assets/Js/custom.js')
    .addEntry('maps', './assets/vue/maps.js')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableVueLoader()
    .enablePostCssLoader()
    .enableSassLoader()
    // https://eslint.org/docs/user-guide/getting-started
    .enableEslintLoader({
        configFile: './.eslintrc.json',
    })
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .autoProvidejQuery();

module.exports = Encore.getWebpackConfig();
