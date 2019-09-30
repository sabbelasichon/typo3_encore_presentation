<?php
$EM_CONF[$_EXTKEY] = [
    'title' =>  'TYPO3 Webpack Encore Site Package',
    'description' => 'An example site package for TYPO3 Webpack Encore',
    'category' => 'Webpack Encore',
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'modify_tables' => '',
    'clearCacheOnLoad' => 0,
    'author' => 'Sebastian Schreiber',
    'author_email' => '',
    'author_company' => 'schreibersebastian.de',
    'version' => '0.1.0',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-9.5.99',
        ],
        'conflicts' => [
        ],
        'suggests' => [
        ],
    ],
];