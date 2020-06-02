const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('private/typo3conf/ext/typo3_webpack_encore_demo/Resources/Public/Build/')
    .setPublicPath('/typo3conf/ext/typo3_webpack_encore_demo/Resources/Public/Build/')
    .addEntry('main', './assets/js/main.js')
    .enableSassLoader()
    .enablePostCssLoader()
    .enableVersioning(Encore.isProduction())
    .enableSourceMaps(!Encore.isProduction())
    .enableIntegrityHashes()
    .cleanupOutputBeforeBuild();

module.exports = Encore.getWebpackConfig();