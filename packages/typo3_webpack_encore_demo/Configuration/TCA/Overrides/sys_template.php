<?php

defined('TYPO3_MODE') || die('Access denied.');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'typo3_webpack_encore_demo',
    'Configuration/TypoScript',
    'TYPO3 Webpack Encore Demo'
);