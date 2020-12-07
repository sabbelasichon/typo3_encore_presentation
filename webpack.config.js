const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('private/typo3conf/ext/typo3_webpack_encore_demo/Resources/Public/')
    .setPublicPath('/typo3conf/ext/typo3_webpack_encore_demo/Resources/Public/')
    // .addEntry('app', './assets/Js/custom.js')
    .addEntry('maps', './assets/vue/maps.js')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableVueLoader()
    .enablePostCssLoader()
    .enableSassLoader()
    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')
    // https://eslint.org/docs/user-guide/getting-started
    .enableEslintLoader({
        configFile: './.eslintrc.json',
    })
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .autoProvidejQuery();

module.exports = Encore.getWebpackConfig();
