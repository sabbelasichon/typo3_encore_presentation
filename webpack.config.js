const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('private/typo3conf/ext/typo3_webpack_encore_demo/Resources/Public/Build/')
    .setPublicPath('/typo3conf/ext/typo3_webpack_encore_demo/Resources/Public/Build/')
    .addEntry('main', './assets/js/main.js')
    .addEntry('video', './assets/js/video.js')
    .enableSassLoader()
    .enablePostCssLoader()
    .enableSingleRuntimeChunk()
    .splitEntryChunks()
    .enableVersioning(Encore.isProduction())
    .enableSourceMaps(!Encore.isProduction())
    .enableIntegrityHashes(Encore.isProduction())
    .cleanupOutputBeforeBuild();

module.exports = Encore.getWebpackConfig();