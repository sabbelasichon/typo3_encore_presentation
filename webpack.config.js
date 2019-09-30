var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/typo3conf/ext/typo3_webpack_encore_demo/Resources/Public/')
    .setPublicPath('/typo3conf/ext/typo3_webpack_encore_demo/Resources/Public/')
    .addEntry('app', './assets/js/Custom.js')
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .autoProvidejQuery();

module.exports = Encore.getWebpackConfig();
